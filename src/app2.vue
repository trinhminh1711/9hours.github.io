    <template >
    <div class="container">
        <button @click="test" >FILL </button>  
            <div class="row" id="header-login" >
              <div class="col-2 yasou d-flex align-items-center">
                  <div id="menu-dropdown">
                      <img  id="button-dropdown" src="https://cdn4.iconfinder.com/data/icons/color-3/288/menuldpi-512.png" style="width: 70%;height: 70%;">
                    <div id="dropdown-screen" >
                    <ul class="top-ul">
                      <li>
                    <a onclick="gohome()">Trang Chủ</a>
                    </li>
                    <li>
                    <a>Giỏ Hàng</a>
                    </li>
                    </ul>
                    <ul class="bot-ul">
                        <li>
                          <img src="idea.jpg"> <span>Ý tưởng</span>

                          <img id="ab1" class="ab" src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png" style="width: 10px; height: 10px;">
                          <div class ="menu-1">
                          <p>Phòng bếp</p>
                          <p>Phòng ngủ</p>
                          <p>Phòng tắm</p>
                          <p>Phòng làm việc</p>
                          <p>Phòng trẻ em</p>
                          <p>Phòng ngoài trời</p>
                          </div>
                        </li>
                        <li>
                          <img src="idea.jpg"> <span>Sản Phẩm</span>

                          <img id ="ab2" class="ab" src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-3/25/Down-Carrot-512.png" style="width: 10px; height: 10px;">
                          <div>
                        <div class ="menu-1">
                          <p>Bàn</p>
                          <p>Ghế</p>
                          <p>Phòng tắm</p>
                          <p>Phòng làm việc</p>
                          <p>Phòng trẻ em</p>
                          <p>Phòng ngoài trời</p>
                          </div>
                            
                          </div>
                        </li>
                        <li>
                          <img src="idea.jpg"> <span>Dịch vụ</span>
                        </li>

                                  <li>
                          <img src="idea.jpg"> <span>Tư Vấn</span>
                        </li>
                                  <li>
                          <img src="idea.jpg"> <span>Tin Tức</span>
                        </li>

                    </ul>
                    </div>
                   </div>
                  
              </div>
                <div class="col-2">
                    <img onclick="gohome()" src="Trangchu.jpg">
                </div>
                <div class="col-md-4 col-1 d-flex align-items-center" id="search-header">
                    <input type="text" id="search-input" name="search" placeholder="search">

                    <img @click="test" src="search-icon.jpg">
        
                </div>


                <div class="col-2 ml-auto justify-content-end  d-flex align-items-center " id="user-1">
                <div class="col-1 d-flex align-items-center  mr-auto">
                  
                   <div class="dropdown4">
                      <img src="bell.jpg">
                      <div class="dropdown-contentx">
                        <div>
                            <p class ="nofication">Yêu cầu rút tiền đã được xử lý</p>
                            <p>shopee đã  chuyển khoản 1400292 cho yêu cầu rút tiền 0965727838. Vui lòng chờ 3 ngày để tiền được chuyển về tài khoản của bạnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        </div>
                        <div>
                            <p class ="nofication">Yêu cầu rút tiền đã được xử lý</p>
                            <p>shopee đã  chuyển khoản 1400292 cho yêu cầu rút tiền 0965727838. Vui lòng chờ 3 ngày để tiền được chuyển về tài khoản của bạn</p>
                        </div>
                         <div>
                            <p class ="nofication">Yêu cầu rút tiền đã được xử lý</p>
                            <p>shopee đã  chuyển khoản 1400292 cho yêu cầu rút tiền 0965727838. Vui lòng chờ 3 ngày để tiền được chuyển về tài khoản của bạn</p>
                        </div>
                          <div>
                            <p class ="nofication">Yêu cầu rút tiền đã được xử lý</p>
                            <p>shopee đã  chuyển khoản 1400292 cho yêu cầu rút tiền 0965727838. Vui lòng chờ 3 ngày để tiền được chuyển về tài khoản của bạn</p>
                        </div>
                          <div>
                            <p class ="nofication">Yêu cầu rút tiền đã được xử lý</p>
                            <p>shopee đã  chuyển khoản 1400292 cho yêu cầu rút tiền 0965727838. Vui lòng chờ 3 ngày để tiền được chuyển về tài khoản của bạn</p>
                        </div>
                        <div class="fixed-bottom">
                          <p class ="nofication">Xem Thêm</p>
                      </div>
                      </div>
                  </div>
                </div>
                <img src="user.jpg" class=" dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">

                <div class="dropdown">

                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0 " type="button">Thông tin cá nhân</button>
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0 "  type="button">Sửa thông tin</button>
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0" type="button">ideabook của tôi</button>
                  
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0" type="button">ảnh của tôi
                    <img class="ml-5" src="http://www.pngall.com/wp-content/uploads/2/Upload-PNG-Image-File.png " style="width: 15px; height: 10px;">
                  </button>
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0" type="button">upload ảnh
                    <img class="ml-5" src="img-file.jpg" style="width: 15px; height: 10px;">
                  </button>
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0" type="button">trở thành nhà dịch vụ</button>
                  <button class="dropdown-item border-right-0 border-left-0 border-bottom-0" type="button" onclick="logout()">
                  đăng xuất
                </button>
                </div>
              </div>
                    
                    <a href="#" style="margin-left: 10px;">Nam Vinh</a>

                </div>




           <div class="col-2 ml-auto justify-content-end  d-flex align-items-center " id="user-2">
                <img src="user-icon.jpg" class=" dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">

            <div class="dropdown">

            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
             <a href="#login-sceen"><button onclick="login()" class="dropdown-item border-right-0 border-left-0 border-bottom-0 " id="login"  type="button">Đăng Nhập
              </button>
              </a>

              <button class="dropdown-item border-right-0 border-left-0 border-bottom-0 "  type="button">Đăng Kí</button>
    
            </div>
          </div>
                    
                    <a href="#" style="margin-left: 10px;">Tài Khoản</a>

          </div>


            </div>
            <ul id="v-for-object" class="demo">
            <div v-for="item in minh">
                 <div class="img-present">
                                    <img v-bind:src="item.urlIMG">
                                </div>
                                <div class="col-md-7 text-present">
                                    <div class="row">
                                        <div class="col-md-2 col-3">
                                            <img src="avatar.jpg" class="rounded-circle" style="width: 50px; height: 50px;">
                                        </div>
                                        <div class="col-md-8 col-9 evaluate">
                                            <p style="height: 20px;" class="filldata">{{ item.title }}</p>

                                            <div style="margin-top: 5px;">
                                                <span class="filldata-user">{{ item.nameuser }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text">
                                        <p class="filldata-tiltle">
                                         {{ item.body }}
                                        </p>
                                        <p><a href="#">Xem thêm> </a></p>
                                    </div>
                                    <div class="row contract">
                                        <span>                   
                         <img src="phone-number.jpg">
                        <span>Liên hệ</span>
                                        </span>
                                        <span style="margin-left: 20px;">
                          <img src="location.jpg">
                          <span>102 Thái Thịnh, Đống Đa , Hà Nội</span>
                                        </span>

                                    </div>

                                </div>

            </div>
            </ul>
    </div>
    </template>

    <script>
     import { hello } from '../src/new.js';
    export default 
    {
     
    data() {
        return {
        minh : '',
        n:1,
  
     
        };
        },
    methods: {

        test  : async function nhandata()
        {
            let val = await hello(); 

            this.minh =  val;  

        },
        

  

    }
       


    }
    ;
    </script>
    <style>
    .img-present > img {
    width: 200px;
    height: 300px;
    }
    #minhvsma > div > img {
    width: 200px;
    height: 300px;
    }
    .demo
    {
        margin-left: 300px;
    }
    </style>
