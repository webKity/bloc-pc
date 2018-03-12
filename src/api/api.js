import {mapState} from 'vuex'

let api = {
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  methods: {
    async registerAPI (params) {
      try {
        if (typeof params !== 'object') {
          this.$tip('注册参数格式不正确！')
        } else if (params.account === '') {
          this.$tip('邮箱不能为空！')
        } else if (!this.$validata.isEmail(params.account)) {
          this.$tip('邮箱格式错误！')
        } else if (params.name === '') {
          this.$tip('用户昵称不能为空！')
        } else if (params.password === '') {
          this.$tip('密码不能为空！')
        } else if (params.password.length < 6 || params.password.length > 16) {
          this.$tip('密码长度为6到16个字符！')
        } else if (params.password !== params.confirmPassword) {
          this.$tip('密码不一致！')
        } else {
          let data = (await this.$http.post('/api/user/register', {}, {params: params})).body
          this.$tip(data.retMessage)
          if (data.retCode === 200) {
            this.$router.push('/login')
          }
        }
      } catch (e) {
        if (typeof e.body.error === 'string') {
          this.$tip(e.body.error)
        } else {
          this.$tip('服务器内部错误!')
        }
      }
    },
    async loginAPI (params) {
      try {
        if (typeof params !== 'object') {
          this.$tip('登录参数格式不正确！')
        } else if (params.account === '') {
          this.$tip('邮箱不能为空！')
        } else if (!this.$validata.isEmail(params.account)) {
          this.$tip('邮箱格式错误！')
        } else if (params.password === '') {
          this.$tip('密码不能为空！')
        } else if (params.password.length < 6 || params.password.length > 16) {
          this.$tip('密码长度为6到16个字符！')
        } else {
          let data = (await this.$http.get('/api/user/login', {params: params})).body
          this.$store.commit('change_user', data)
          this.$router.push('/index')
        }
      } catch (e) {
        if (typeof e.body.error === 'string') {
          this.$tip(e.body.error)
        } else {
          this.$tip('服务器内部错误!')
        }
        console.log(e)
      }
    },
    async createPostAPI (params) {
      try {
        let data = {}
        if (typeof this.user.token === 'undefined' || this.user.token === '') {
          this.$tip('请您先登录!')
        } else if (typeof params !== 'object') {
          this.$tip('创建文章参数格式不正确！')
        } else if (params.title === '') {
          this.$tip('标题不能为空！')
        } else if (params.content === '') {
          this.$tip('正文不能为空！')
        } else {
          data = (await this.$http.post('/api/blog/create', {}, {
            headers: {
              token: this.user.token
            },
            params: params
          })).body
          this.$tip(data.retMessage)
        }
        return data
      } catch (e) {
        if (typeof e.body.error === 'string') {
          this.$tip(e.body.error)
        } else {
          this.$tip('服务器内部错误!')
        }
        console.log(e)
      }
    },
    async queryBlogListAPI (params) {
      try {
        let data = (await this.$http.get('/api/blog/query', {
          params: params
        })).body
        return data
      } catch (e) {
        if (typeof e.body.error === 'string') {
          this.$tip(e.body.error)
        } else {
          this.$tip('服务器内部错误!')
        }
        console.log(e)
      }
    },
    async queryBlogInfAPI (params) {
      try {
        let data = (await this.$http.get('/api/blog/detail/' + params.id)).body
        return data
      } catch (e) {
        this.$tip(e.body.message)
        console.log(e)
      }
    }
  }
}

export default api
