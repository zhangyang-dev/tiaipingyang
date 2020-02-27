<template>
  <el-main>
    <div style="margin-right: 100px;margin-left: 100px;">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span v-if="UserForm==''">
              <el-link
                href="#/register"
                style="float:left;margin-top: 2mm; margin-left: 10px"
              >注册 &nbsp;&nbsp;|</el-link>
              <el-link href="#/login" style="float:left;margin-top: 2mm; margin-left: 10px">登录</el-link>
            </span>
            <!-- 用户已登录 -->
            <span v-if="UserForm!=null">
              <el-link href="#/login" style="float:left;margin-top: 2mm; margin-left: 10px">
                <b style="color:red">{{UserForm.user_name}}</b>
              </el-link>
              <el-link href="#/login" style="float:left;margin-top: 2mm; margin-left: 10px">退出</el-link>
            </span>
            <!-- 右侧 -->
            <span v-if="UserForm!=null">
              <el-link href="#/login" style="float: right; margin-top: 2mm;margin-right: 35px;">我的订单</el-link>
            </span>
            <!-- 以上是判断是否显示 -->
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-image :src="src" style="height: 120px ;width: 170px; margin-left: 25px;"></el-image>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <div style="margin-top: 40px; ">
              <el-input
                placeholder="请输入内容"
                v-model="input3"
                class="input-with-select"
                style="border:1px solid #acd6ff"
              >
                <el-select v-model="select" slot="prepend">
                  <el-option label="商品" value="1"></el-option>
                  <el-option label="店铺" value="2"></el-option>
                </el-select>
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  style="background-color: #acd6ff; border:1px solid #acd6ff"
                  class="el-button"
                >
                  <font style="color: white">搜索</font>
                </el-button>
              </el-input>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div style="margin-top: 40px; ">
              <el-badge
                :value="12"
                class="item"
                style="float: right; margin-right: 80px"
                type="warning"
              >
                <el-button
                  size="medium"
                  style="float: right;  border:1px solid white;background-color: #acd6ff;"
                >
                  <el-button
                    size="medium"
                    icon="el-icon-truck"
                    style=" background-color: #acd6ff; "
                  ></el-button>购物车
                </el-button>
              </el-badge>
            </div>
          </div>
        </el-col>
      </el-row>
      <div style="margin-bottom: 0px"></div>
      <el-row>
        <el-col :span="3">
          <div class="grid-content bg-purple-light">
            <p style="float:contour;margin-left: 20px" class="el-icon-s-unfold">&nbsp;&nbsp;商品分类</p>
          </div>
        </el-col>
        <el-col :span="21">
          <div class="grid-content bg-purple-light" style="margin-left: 40px; margin-bottom: 0">
            <el-form :model="queryForm">
              <el-form-item style="margin-bottom: 0px">
                <el-radio-group
                  size="medium"
                  fill="red"
                  v-model="queryForm.brand"
                  @change="onSubmit"
                >
                  <el-radio-button>首页</el-radio-button>
                  <el-radio-button label="服装百货">服装百货</el-radio-button>
                  <el-radio-button label="电子产品">电子产品</el-radio-button>
                  <el-radio-button label="生活用品">生活用品</el-radio-button>
                  <el-radio-button label="其他商品">其他商品</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <!-- 树 -->
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-container style="height: 500px; border: 1px solid #eee">
              <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-s-goods"></i>服装
                    </template>
                    <el-menu-item-group>
                      <template slot="title">女装/男装/内衣</template>
                      <el-menu-item index="1-1">女装</el-menu-item>
                      <el-menu-item index="1-2">男装</el-menu-item>
                      <el-menu-item index="1-3">内衣</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="2">
                    <template slot="title">
                      <i class="el-icon-s-platform"></i>电子产品
                    </template>
                    <el-menu-item-group>
                      <template slot="title">家电/数码/手机</template>
                      <el-menu-item index="2-1">家电</el-menu-item>
                      <el-menu-item index="2-2">数码</el-menu-item>
                      <el-menu-item index="2-3">手机</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="3">
                    <template slot="title">
                      <i class="el-icon-toilet-paper"></i>生活用品
                    </template>
                    <el-menu-item-group>
                      <template slot="title">美妆/洗护/保健品</template>
                      <el-menu-item index="3-1">美妆</el-menu-item>
                      <el-menu-item index="3-2">洗护</el-menu-item>
                      <el-menu-item index="3-2">保健品</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-submenu index="4">
                    <template slot="title">
                      <i class="el-icon-box"></i>其他商品
                    </template>
                    <el-menu-item-group>
                      <template slot="title">游戏/乐器/奢侈品</template>
                      <el-menu-item index="4-1">游戏</el-menu-item>
                      <el-menu-item index="4-2">乐器</el-menu-item>
                      <el-menu-item index="4-2">奢侈品</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
              </el-aside>
              <div style="width: 1080px;">
                <template>
                  <el-carousel indicator-position="outside" height="500px">
                    <el-carousel-item v-for="item in 5" :key="item">
                      <h3>{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </template>
              </div>
            </el-container>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-row style="margin-left: 200px;">
              <el-col
                :span="5"
                v-for="(o, index) in 4"
                :key="o"
                :offset="index > 0 ? 2 : 0"
                style="margin-left: 20px;"
              >
                <el-card :body-style="{ padding: '0px' }">
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                  <div style="margin-left: 0px;">
                    <span>好吃的汉堡</span>
                    <br />
                    <span>价格￥1000</span>
                    <br />
                    <span>销量9999</span>
                    <br />
                    <span>简介</span>
                    <br />
                    <div class="bottom clearfix">
                      <el-button type="primary" class="button">加入购物车</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <el-pagination
            style="margin-left: 400px;margin-top: 30px"
            background
            layout="prev, pager, next"
            :page-count="pageCount"
            @current-change="gotoPage"
          ></el-pagination>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div
            class="aa"
            style="
                                     height: 100px;
                                     margin-top: 35px;"
          >
            <hr />
            <p class="p-foot">集中点滴力量，聚成汪洋大海。版权 ©所有:太平洋项目组</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-main>
</template>

<script>
import { getToken } from "@/permissions/auth";
export default {
  name: "FirstPage",
  data() {
    return {
      UserForm: {},
      src: require("../../assets/logo3.jpg"),
      input1: "",
      input2: "",
      input3: "",
      select: "",
      queryForm: {},
      goodList: {},
      pageCount: 10
    };
  },
  methods: {
    /**
     * 分类查询方法
     */
    onSubmit() {},
    /**
     * 分页
     */
    gotoPage() {},
    // 判断用户
    getUser() {
      console.log(getToken());
      // this.UserForm = "";
      this.UserForm = getToken();
    }
  },
  mounted() {
    this.getUser();
  },
  created() {}
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background: url("../../assets/lb1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background: url("../../assets/lb2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-carousel__item:nth-child(3) {
  background: url("../../assets/lb3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-carousel__item:nth-child(4) {
  background: url("../../assets/lb4.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-carousel__item:nth-child(5) {
  background: url("../../assets/lb5.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bg-purple-dark {
  background-color: #acd6ff;
}
.bg-purple {
  background: white;
  margin-top: 35px;
}
.bg-purple-light {
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.p-foot {
  color: white;
  font-size: 16px;
  margin-left: 400px;
  margin-top: 35px;
  padding-left: 20px;
  font-style: italic;
}
.aa {
  background: url("../../assets/页脚.gif");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
