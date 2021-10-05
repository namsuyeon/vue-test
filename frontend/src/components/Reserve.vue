<template>
    <div class="body">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        </head>
        <div class="display">
            <div class="background">
                <div class="display1">
                    <div class="poster">
                    <!-- (왼쪽 디스플레이,) 선택한 영화 포스터(546x752) 출력 -->
                    <img src="../assets/poster0.jpg" class="poster_0">
                    </div>

                    <div class="movie_info">
                        <!-- (오른쪽 디스플레이) -->

                        <div class="select_movie">
                            <!-- 영화선택버튼 -->
                            <span style="color:rgb(255, 255, 255)">Pick a movie  </span> 
                            <select>
                                <option>select movie</option>
                                <option>환승연애 (8,000 won)</option>
                                <option>스트리트우먼파이터(10,000 won)</option>
                            </select>
                        </div>
                
                        <div class="select_seat_list">
                            <!-- 좌석색깔 설명 -->
                            <div style = "padding: 3px 10px 3px 3px;" class="select_seat_list1">
                                <i class="fas fa-square">Avaliable</i>
                            </div>
                            <div style = "padding: 3px 10px 3px 3px;" class="select_seat_list2">
                                <i class="fas fa-square">Selected</i>
                            </div>
                            <div style = "padding: 3px 10px 3px 3px;" class="select_seat_list3">
                                <i class="fas fa-square">Occupied</i>
                            </div>
                        </div>
                
                        <div class="select_seat">
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="display-footer">
            <div class="background-footer">
                <p class="contact">CONTACT<br>
                주소 : 
                대표번호 : <br>
                TEL : <br>
                대표이사 : =<br>
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
.display1 {
    width: 100%;
    /* 가로길이기준, 플렉스박스의경우 세로는 내용물길이만큼 늘어남 */
    padding: 3% 4%;
    display: flex;  
}
.poster{
    width: 400px; 
    height: auto;
    border-radius: 3%;
    overflow:hidden;
}
.poster_0{
    width: 100%;
    height: 100%;
    object-fit:cover;
}

.movie_info{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 50%;
}

.select_movie{
    width:400px; 
    height:30px; 
    background-color:rgb(201, 52, 52);
    padding:5px;
    margin: auto;
    text-align: center;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 1ex;
    overflow: hidden;
}

/* 좌석색깔설명 배치 */
.select_seat_list{
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: flex-start;
    
}
.select_seat_list1 i{
    color: rgb(247, 186, 54);}
.select_seat_list2 i{
        color: rgb(190, 59, 49);}
.select_seat_list3 i{
            color: rgb(156, 156, 156);}


@media screen and (max-width:1200px) {
    .movie_info{
        width:500px
    }
    .poster{
        display: none;
    }
}

</style>