<template>
  <div class="container ">
    <br />
    <h1 align="center">ข้อมูลพืชพรรณ</h1>
    <br />
    <div class="row">
      <div class="col-sm-4 border">
        <div class="show" style="width:20rem; hight:25rem;" mt-3></div>
        <div :key="key" v-for="(contact, key) in contacts">
            <br/>
          <br />
          <img
            class="card-img-top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBzWgc85I8N1iEkTK4UekW9wpt7A4PcP3J7A&usqp=CAU"
            alt="card image cap"
          />
          <br />
          <div class="card-body">
            <b-card bg-variant="success" text-variant="white" title="">
              <b-card-text>
                <p>ชื่อ : {{ contact.name }}</p>
                <p>ชื่อวิทยาศาสตร์ : {{ contact.style }}</p>
                <p>ประเภท : {{ contact.category }}</p>
                <p>บริเวณที่พบ : {{ contact.Zone }}</p>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firestore from '@/database/firebase';

const database = firestore.database();
const contactRef = database.ref('/contacts');
export default {
  name: 'AddData',
  data() {
    return {
      contacts: {},
      name: '',
      style: '',
      category: '',
      zone: '',
    };
  },

  mounted() {
    contactRef.on('value', (snapshot) => {
      this.contacts = snapshot.val();
    });
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 px;
}

h1 {
  margin: 10px;
  font-weight: 100;
  text-align: center;
  color:white;
}
.card {
  max-width: 1600px;
  margin-left: 8%;
  margin-right: 7%;
}
.card-body {
  align-items: center;
}
.card-img-top{

}
</style>
