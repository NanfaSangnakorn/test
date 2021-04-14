<template>
  <div class="home" align="center">
    <br />
    <img alt="Vue be" src="../assets/bg.png" width="900" height="550" />
    <br />
    <br />

    <HelloWorld msg="โครงการอนุรักษ์พันธุกรรมพืช ฯ  (อพ.สธ.) " />

    <h1 align="center">มหาวิทยาลัยสงขลานครินทร์</h1>

    <br />
    <br />

    <img alt="Vue map2" src="../assets/map.jpg" width="700" height="500" /> <br />
    <br />
    <br />
    <div class="table">
      <table>
        <br />
        <br />
        <div class="a">
          <a href="/zoneA"
            ><img src="../assets/ZoneA.jpg" vspace="4" hspace="4" width="300" height="180"
          /></a>
          <a href="/zoneB"
            ><img src="../assets/ZoneB.jpg" vspace="4" hspace="4" width="300" height="180"
          /></a>
          <a href="/zoneC"
            ><img src="../assets/ZoneC.jpg" vspace="4" hspace="4" width="300" height="180"
          /></a>
        </div>

        <div class="a">
          <a href="/zoneD"
            ><img src="../assets/ZoneD.jpg" vspace="4" hspace="4" width="300" height="180"
          /></a>
          <a href="/zoneE"
            ><img src="../assets/ZoneE.jpg" vspace="4" hspace="4" width="300" height="180"
          /></a>
          <a href="/zoneF"
            ><img src="../assets/ZoneF.jpg" vspace="4" hspace="4" width="300" height="180"
          /></a>
        </div>

        <div class="a">
          <a href="/zoneG"
            ><img src="../assets/ZoneG.jpg" vspace="5" hspace="5" width="300" height="180"
          /></a>
          <a href="/zoneH"
            ><img src="../assets/ZoneH.jpg" vspace="5" hspace="5" width="300" height="180"
          /></a>
          <a href="/zoneI"
            ><img src="../assets/ZoneI.jpg" vspace="5" hspace="5" width="300" height="180"
          /></a>
        </div>
        <br />
        <br />
      </table>
    </div>
    <br />
    <br />
    <h3 align="left">ประวัติโครงการ</h3>
    <br />
    <h4 align="left">
      โครงการอนุรักษ์ตันหม้อข้าวหม้อแกงลิง มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตตรัง
    </h4>
    <br />

    <img alt="Vue ff" src="../assets/ff.jpg" width="350" height="300" /> <br />

    <br />

    <div align="left">
      <h7>
        ตามที่มหาวิทยาลัยสงขลานครินทร์ ได้รับพระราชทานพระราชานุญาตดำเนินงาน
        โครงการอันเนื่องมาจากพระราชดำริในโครงการอนุรักษ์พันธุกรรมพืชอันเนื่องมาจากพระราชดำริ
        สมเด็จพระเทพรัตนราชสุดา ฯ สยามบรมราชกุมารี (อพ.สธ.)และต่อมามหาวิทยาลัยได้รับแจ้ง
        การประสานจากวิทยาเขตตรังถึงการสำรวจพื้นที่ภายในวิทยาเขต
      </h7>
    </div>
    <div align="left">
      <h7>
        พบว่ามีพรรณพืชหายากและพืชท้องถิ่นภายในวิทยาเขตจึงมีความประสงค์ขอนำพื้นที่
        บริเวณที่สำรวจพบพรรณพืชดังกล่าวเข้าร่วมสนองพระราชดำริฯในโครงการอนุรักษ์พันธุกรรมพืช
        อันเนื่องมาจากพระราชดำริฯ จึงนำพื้นที่ที่สำรวจพบต้นหม้อข้าวหม้อแกงลิงและพืชหายาก
        ภายในมหาวิทยาลัยสงขลานครินทร์ วิทยาเขตตรัง เข้าร่วมสนองพระราชดำริในโครงการอนุรักษ์
        อันเนื่องมาจากพระราชดำริฯโดยมีเนื้อที่ทั้งสิ้น 6 ไร่ 2 งาน 51 ตารางวาและมหาวิทยาลัย
        ได้จัดทำหนังสือขอนำพื้นที่ดังกล่าวเข้าร่วมสนองพระราชดำริในโครงการอนุรักษ์
        พันธุกรรมพืชอันเนื่องมาจากพระราชดำริฯ(อพ.สธ.) เมื่อวันที่ 28 พฤษภาคม 2557
      </h7>
    </div>
    <br />
    <br />
    <a><img alt="Vue coc1" src="../assets/coc1.png" width="250"/></a>
    <br />
    <a><img alt="Vue psu" src="../assets/psu.png" width="250"/></a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.table {
  background-color: #c5a6c7;
  width: 300x;
  height: 300x;
  align-items: flex-start;
}

.a {
  margin: 0px 5px 5px 5px;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
