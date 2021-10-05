<template>
    <div class="body">
        <main class="display">
            <div class="background">
                <h1>JOIN</h1>
                <p class="small-title">안녕하세요. CGV입니다.</p>
                <form @submit="onSubmit">
                    <div id="signin">
                        <input id="photo" name="photo" type="file">
                    </div>
                    <div id="signin">
                        <label class="sign" for="userid">아이디 <span>&centerdot;</span></label><br>
                        <input id="userid" name="userid" type="text" placeholder="아이디" v-model="user.userid" /><br>
                    </div>
                    <div id="signin">
                        <label class="sign" for="password">비밀번호 <span>&centerdot;</span></label><br>
                        <input id="password" name="pass" type="password" placeholder="비밀번호" v-model="user.password" /><br>
                        <input id="pass2" type="password" v-model="user.passwordcheck" placeholder="비밀번호 확인">
                    </div>
                    <div id="signin">
                        <label class="sign" for="name">이름 <span>&centerdot;</span></label><br>
                        <input id="name" name="name" type="text" placeholder="이름을(를) 입력하세요." v-model="user.name" />
                    </div>
                    <div id="signin">
                        <label class="sign">성별 <span>&centerdot;</span></label><br>
                        <div class="gender">
                            <input id="man" name="gender" type="radio" value="man">
                            <label for="man">남자</label>
                            <input id="woman" name="gender" type="radio" value="woman">
                            <label for="woman">여자</label>
                        </div>
                    </div>
                    <div id="signin">
                        <label class="sign" for="phone">연락처 <span>&centerdot;</span></label><br>
                        <input id="phone" type="tel" placeholder="연락처" v-model="user.tel" />
                    </div>
                    <div id="signin">
                        <label class="sign" for="email">이메일 <span>&centerdot;</span></label><br>
                        <input id="email" name="email" type="email" placeholder="이메일" v-model="user.email" />
                    </div>
                    <div id="signin">
                        <label class="sign" for="birthday">생년월일 <span>&centerdot;</span></label><br>
                        <select id="bir_yy" name="bir_yy">
                            <option>연</option>
                            
                        </select>
                        <select id="bir_mm" name="bir_mm">
                            <option>월</option>
                            
                        </select>
                        <select id="bir_dd" name="bir_dd">
                            <option>일</option>
                            
                        </select>
                    </div>
                    <div id="signin">
                        <label class="sign" for="address">주소 <span>&centerdot;</span></label><br>
                        <input id="address" type="text" placeholder="주소" v-model="user.address" /><br>
                    </div>
                    <div>
                        <input id="agree_terms" name="agree_terms" type="hidden">
                        <input id="user_info_agree" name="user_info_agree" type="hidden">
                        <input id="marketing_sms_agree" name="marketing_sms_agree" type="hidden">
                        <input id="marketing_email_agree" name="marketing_email_agree" type="hidden">
                        <button type="submit" class="btn-shape-border" @click="signUp">가입하기</button>
                    </div>
                </form>
            </div>
        </main>
        <div class="display-footer">
            <div class="background-footer">
                <p class="contact">CONTACT<br>
                주소 : 
                대표번호 : 0<br>
                TEL : <br>
                대표이사 : <br>
                Copyright 2021 movie project (c) Allrights Reserved
                </p>
            </div>                
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user : {
                    userid : '',
                    password : '',
                    name : '',
                    tel : '',
                    email : '',
                    address : '',
                }
        }
    },
    methods: {
        signUp: function (event) {  
            if(this.onSubmit==true) {       
                this.$http.post("/api/users/signUp", {
                    user: this.user,
                })
                .then(
                    (res) => {
                    if(res.data.success == true) {
                        alert(res.data.message);
                        this.$router.push("/login");
                    }
                    if (res.data.success == false) {
                        alert("Sign Up Failed Please use anoter ID");
                    }
                })
                .catch(function(error) {
                    alert("error");
                });
            }
        }
    }
}
</script>

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
.small-title {
    text-align: center;
    margin-bottom: 4%;
    font-size : 1vw;
}
#signin {
    text-align: left;
    margin-top: 3%; 
    margin-left: -10%;
    padding : 2%;
}
#signin input {
    border: 1px solid rgb(190, 59, 49);
    border-radius: 3px;
    margin: -1px 10px;
    width: 100%;
    padding: 10px;
    text-align: left;
    
}
.gender {
    
    display : inline-block;
}
.sign {
    margin-left : 2.5%;
}
label {
    color : black;
}
.btn-shape-border{
    width: 100%;
    border: 1px solid rgb(190, 59, 49);
    padding: 2%;
    background-color: rgb(190, 59, 49);
    text-align: center;
    margin-top: 10px;
    font-size: 1.1vw;
    color: #fff;
    
}
</style>
