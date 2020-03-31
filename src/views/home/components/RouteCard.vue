<template>
  <el-card :body-style="bodyStyle">
    <div class="card-content">
      <div class="card-title">{{ title }}</div>
      <div v-if="subTitle" class="card-sub-title">{{ subTitle }}</div>
      <div class="card-bg-icon"><i :class="icon" /></div>
    </div>
    <div class="bottom-bar clear-fix">
      More info <i class="el-icon-d-arrow-right" />
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'RouteCard',
    props: {
      title: {
        type: String || Number,
        require: true,
        default: '',
        validator: function (value) {
          return true || value;
        }
      },
      subTitle: {
        type: String || Number,
        require: true,
        default: '',
      },
      bgColor: {
        type: String,
        default: '#5c5c5c',
      },
      color: {
        type: String,
        default: 'black',
      },
      icon: {
        type: String,
        default: 'el-icon-setting',
      },
    },
    data() {
      return {
        bodyStyle: {
          background: this.bgColor,
          color: this.color,
          borderColor: 'rgba(0,0,0,.3)',
          height: '100%',
          position: 'relative'
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  $w: 360px;
  .el-card {
    color: #333;
    width: $w;
    height: 140px;
    cursor: pointer;
    border: none;
    margin: 30px 10px ;
    .card-title {
      font-size: 26px;
      font-weight: bold;
    }
    .card-sub-title {
      font-size: 20px;
    }
    &:hover {
      filter: invert(0%);
      .card-bg-icon {
        opacity: .6;
        transform: scale(1.1);
      }
    }
    &:active {
      filter: invert(80%);
    }
    filter: invert(16%);
  }

  .card-content {
    height: 100%;
  }

  .bottom-bar {
    position: absolute;
    width: $w;
    padding: 2px 0;
    bottom: 0;
    background: rgba(0, 0, 0, .2);
    text-align: center;
    z-index: 2;
    font-size: 16px;
    line-height: 24px;
    left: 0;
    i {
      font-size: 12px;
    }
  }

  .card-bg-icon {
    position: absolute;
    font-size: 60px;
    opacity: .4;
    top: 20px;
    right: 40px;
  }
</style>
