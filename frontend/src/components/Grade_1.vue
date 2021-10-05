<template>        
    <div class="body">
        <div class="display">
            <div class="background">
                <main>
                    
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

<script>
export default {
    
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
</style>