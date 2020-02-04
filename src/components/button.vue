<template>
  <button class="v-button"  :class="[`v-button--${type}`,
  `v-button--${size}`,{
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled
  }]">
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
name:'VButton',
props:{
  type:{
    type:String,
    default:'default'
  },
  plain:{
    type:Boolean,
    default:false
  },
  round:{
    type:Boolean,
    default:false
  },
  size:{
    type:String,
    default:'default'
  },
  circle:{
    type:Boolean,
    default:false
  },
  disabled:{
    type:Boolean,
    default:false
  }
}
}
</script>

<style lang='scss' scoped>

.v-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 400;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #f8ffec;
  }

}
.v-button--small{
  padding: 6px 10px ;
  font-size: 7px ;
  border-radius: 2px ;
  line-height: 1 ;
}
.v-button--large{
  padding: 18px 30px ;
  font-size: 21px ;
  border-radius: 6px ;
  line-height:1 ;
}
.v-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.v-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.v-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.v-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.v-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

// plain
.v-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.v-button--primary.is-plain {
  color: #a2a8ad;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.v-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.v-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.v-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.v-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
//round
.v-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
//circle
.v-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
//disabled
.v-button.is-disabled{
  cursor: not-allowed;
}
</style>