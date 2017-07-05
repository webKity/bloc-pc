<template>
  <div class="body">
    <div class="row">
      <div class="col-lg-9 col-md-8 back-white pt15 pb15 mt05 body-content min-height">
        <slot name="left"></slot>
      </div>
      <div class="col-lg-3 col-md-4 mt05 body-content">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<style>
.body{border-radius:1px;}
.body-content{border-left:3px solid #e1e1e1;border-right:3px solid #e1e1e1;}
.min-height{min-height: calc(100vh - 90px);}
</style>
