<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <main>
                    <section>
                        <h1>LOGIN</h1>
                        <form>
                            <div id="sign">
                                <input id="userid" name="userid" type="text" placeholder="아이디" v-model="user.userid"><br>
                                <input id="pass" name="pass" type="password" placeholder="비밀번호" v-model="user.password">
                            </div>
                            <div id="sign">
                                <button @click="login">로그인</button><br>
                            </div>
                            <div class="align-left">
                                <router-link to="/join_agree">회원가입</router-link>
                            </div>
                            <div class="align-right">
                                <a href="#">아이디&centerdot;비밀번호 찾기</a>
                            </div>
                        </form>
                    </section>
                    <section>
                        <div class="moviechart-slide">
                            <ul>
                                <li><a href="#"><img src="../assets/slide1.jpg" width="100%"></a></li>
                                <li><a href="#"><img src="../assets/slide2.jpg" width="100%"></a></li>
                                <li><a href="#"><img src="../assets/slide3.jpg" width="100%"></a></li>
                                <li><a href="#"><img src="../assets/slide4.jpg" width="100%"></a></li>
                            </ul> 
                        </div>
                    </section>
                </main>
            </div>
        </div>
        <div class="display-footer">
            <div class="background-footer">
                <p class="contact">CONTACT<br>
                
                대표번호 : <br>
                TEL :<br>
                대표이사 : <br>
                Copyright 2021 movie project (c) Allrights Reserved
                </p>
            </div>                
        </div> 
    </div>
</template>

<style scoped>

.background {
  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    width: 75%;
    padding: 3% 4%;
    flex-direction: column; 
    /* 모서리둥글게 */
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2ex;
    overflow: hidden;
}

.display {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    padding : 1% 12%;
    
}

#sign button {
    border-radius: 0px;
    width: 370px;
    height: 30px;
    border: none;
    letter-spacing: 0.5em;
    font-size: 1.1vw;
    margin-top : 3%;
    background-color: rgb(190, 59, 49);
    color : #fff;
}
#sign input {
    border: 1px solid rgb(190, 59, 49);
    border-radius: 3px;
    margin: -1px 10px;
    width: 350px;
    padding: 10px;
    text-align: left;
   
}


.sign {
    margin-left : 2.5%;
}
.align-right {
    display: inline-block;
    width: 16%;

    padding: 5px;
    background-color: rgba(204, 204, 204, 0);
    text-align: right;
    margin-bottom: 10px;
    font-size: 0.9vw;
}

.align-left {
    display: inline-block;
    width: 24%;
    padding: 5px;
    background-color: rgba(204, 204, 204, 0);
    text-align: left;
    margin-bottom: 10px;
    font-size: 0.9vw;
}
.moviechart-slide {
    height:40%; overflow:hidden;
    
}
.moviechart-slide ul{width:400%;display:flex;animation:moviechart-slide 50s infinite;}
.moviechart-slide li {width:30%; height: 100%;}

@keyframes moviechart-slide {
    0% {margin-left: -4%;}
    10% {margin-left: -4%;}
    20% {margin-left: -104%;}
    35% {margin-left: -105%;}
    50% {margin-left: -205%;}
    60% {margin-left: -204%;}
    75% {margin-left: -304%;}
    85% {margin-left: -304%;}
    100% {margin-left: -4%;}
}

</style>

<script>
export default {
    data: function() {
        return {
            user: {
                userid: "",
                password: "",
            }
        }
    },
    methods: {
        login: function(event) {
            this.$http.post("/api/users/login", {
                user:this.user,
            })
            .then(
                (res) => {
                    alert(res.data.message);
                    this.$router.push("/");
                },
                (err) => {
                    alert("Login failed! please check your id or password");
                }
            )
            .catch((err)=> {
                alert(err);
            });
        }

    }
};
</script>