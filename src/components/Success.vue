
      <template>
<div>
    <header-comp></header-comp>
    <div style="text-align: center;
        padding: 40px 0;
        background: #EBF0F5;">
    <div class="card" style="background: white;
        padding: 60px;
        border-radius: 4px;
        box-shadow: 0 2px 3px #CCCCCC;
        display: inline-block;
        margin: 0 auto;">
        <div style="border-radius:200px; height:200px; width:200px; background: #0862a3; margin:0 auto;">
            <i class="checkmark" style="color: #FFFFFF;
        font-size: 100px;
        line-height: 200px;
        margin-left:-15px;">✓</i>
        </div>
        <h1 style="color: #0862a3;
          font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
          font-weight: 900;
          font-size: 40px;
          margin-bottom: 10px;">Success</h1> 
        <p style="color: #0862a3;
          font-family: 'Nunito Sans', 'Helvetica Neue', sans-serif;
          font-size:20px;
          margin: 0;">We received your purchase request;<br/> we'll be in touch shortly!</p>
    </div>
    </div>
    <footer-comp></footer-comp>
</div>
</template>
<script>


import HeaderComp from './Header.vue'
import FooterComp from "./Footer.vue";
import axios from "axios"
export default {
  name: "Success",
  components: {
      HeaderComp, FooterComp
  },
}

</script>