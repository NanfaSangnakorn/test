<template>
  <div class="hello">
    <br />
    <br />
    <h1 align="center">การจัดการข้อมูลพรรณพืช</h1>

    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      style="width:3cm "
    >
      + เพิ่มข้อมูล
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">เพิ่มข้อมูล (Add Data)</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <br />
              <label for="username"> ชื่อ (Name) </label> <br />
              <input type="text" size="90px" v-model="name" placeholder="กรอกชื่อ" />
            </div>

            <div>
              <br />
              <label for="username"> ชื่อวิทยาศาสตร์ (Science name) </label> <br />
              <input type="text" size="90px" v-model="style" placeholder="กรอกชื่อวิทยาศาสตร์" />
            </div>

            <div>
              <label for="username"> ประเภท (Category) </label> <br />
              <b-form-select
                v-model="category"
                placeholder="กดเลือกประเภท"
                :options="options"
                class="mb-3"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- กดเลือกประเภท--</b-form-select-option
                  >
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="เฟิร์นและพืชใกล้เคียงเฟิร์น"
                  >กลุ่มเฟิร์นและพืชใกล้เคียงเฟิร์น (FERN and FERN ALLIES)</b-form-select-option
                >
                <b-form-select-option value="พืชเมล็ดเปลือย "
                  >กลุ่มพืชเมล็ดเปลือย (GYMNOSPERM)</b-form-select-option
                >
                <b-form-select-option value="พืชใบเลี้ยงเดี่ยว"
                  >กลุ่มพืชใบเลี้ยงเดี่ยว (MONOCOTYLEDON)</b-form-select-option
                >
                <b-form-select-option value="พืชใบเลี้ยงคู่"
                  >กลุ่มพืชใบเลี้ยงคู่ (DICOTYLEDON)</b-form-select-option
                >
              </b-form-select>
            </div>

            <div>
              <label for="username"> บริเวณที่พบ</label> <br />
              <b-form-select
                v-model="Zone"
                placeholder="กดเลือกบริเวณที่พบ"
                :options="options"
                class="mb-3"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- กดเลือกบริเวณที่พบ--</b-form-select-option
                  >
                </template>

                <!-- These options will appear after the ones from 'options' prop -->
                <b-form-select-option value="Zone A">ZoneA</b-form-select-option>
                <b-form-select-option value="Zone B">ZoneB</b-form-select-option>
                <b-form-select-option value="Zone C">Zone C</b-form-select-option>
                <b-form-select-option value="Zone D">Zone D</b-form-select-option>
                <b-form-select-option value="Zone E">Zone E</b-form-select-option>
                <b-form-select-option value="Zone F">Zone F</b-form-select-option>
                <b-form-select-option value="Zone G">Zone G</b-form-select-option>
                <b-form-select-option value="Zone H">Zone H</b-form-select-option>
                <b-form-select-option value="Zone I">Zone I</b-form-select-option>
              </b-form-select>
            </div>

            <div>
              <br />
              <label for="myFile"> เลือกไฟล์ </label><br />
              <input type="file" size="80px" class="form-control-file" id="myFile" />
            </div>
            <div></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                @click="insertToContact(name, style, category, Zone, myFile)"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br /><br />
    <table class="table table-bordered text-center ">
      <thead class="table-active">
        <tr>
          <th scope="col-9">ชื่อ (Name)</th>
          <th scope="col-6">ชื่อวิทยาศาสตร์ (Science name)</th>
          <th scope="col-6">ประเภท (Category)</th>
          <th scope="col-6">บริเวณที่พบ (Zone)</th>
          <th scope="col-6">รูปภาพ (Image)</th>
          <th scope="col-6"></th>
        </tr>
      </thead>

      <tbody :key="key" v-for="(contact, key) in contacts">
        <div v-if="updateKey === key">
          <input type="text" v-model="updatename" placeholder=" ชื่อ (Name)" />
          <input type="text" v-model="updatestyle" placeholder="ชื่อวิทยาศาสตร์ (Science name)" />
          <input type="text" v-model="updatecategory" placeholder="ประเภท (Class)" />
          <input type="text" v-model="updatezone" placeholder="บริเวณที่พบ (Zone)" />
          <input type="file" size="80px" class="form-control-file" id="myFile" />
          <button
            @click="
              updateContact(updatename, updatestyle, updatecategory, updatezone, updatemyFile)
            "
          >
            Save
          </button>
        </div>
        <tr v-else>
          <th scope="row">{{ contact.name }}</th>
          <th scope="row">{{ contact.style }}</th>
          <th scope="row">{{ contact.category }}</th>
          <th scope="row">{{ contact.Zone }}</th>
          <th scope="row">{{ contact.myFile }}</th>

          <td>
            <button class="btn btn-success" @click="setUpdateContact(key, contact)">
              แก้ไข(Edit)</button
            >&nbsp;&nbsp;
            <i class="fas fa-trash-alt"></i>
            <button class="btn btn-danger" @click="deleteContact(key)">ลบ (Delete)</button>
          </td>
        </tr>
      </tbody>
    </table>
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
      myFile: '',

      updatename: '',
      updatestyle: '',
      updatecategory: '',
      updateKey: '',
      updatezone: '',
      updatemyFile: '',
    };
  },
  methods: {
    insertToContact(name, style, category, Zone, myFile) {
      const data = {
        name,
        style,
        category,
        Zone,
        myFile,
      };
      contactRef.push(data);
      this.name = '';
      this.style = '';
      this.category = '';
      this.Zone = '';
      this.myFile = '';
    },
    setUpdateContact(key, contact) {
      this.updateKey = key;
      this.updatename = contact.name;
      this.updatestyle = contact.style;
      this.updatecategory = contact.category;
      this.updatezone = contact.Zone;
      this.updatemyFile = contact.myFile;
    },
    updateContact(name, style, category, Zone, myFile) {
      contactRef.child(this.updateKey).update({
        name,
        style,
        category,
        Zone,
        myFile,
      });
      this.updateKey = '';
      this.updatename = '';
      this.updatestyle = '';
      this.updatecategory = '';
      this.updatezone = '';
      this.updatemyFile = '';
    },

    deleteContact(key) {
      contactRef.child(key).remove();
    },
  },
  mounted() {
    contactRef.on('value', (snapshot) => {
      this.contacts = snapshot.val();
    });
  },

  category() {
    return {
      category: null,
      options: [
        { value: null },
        { value: 'เฟิร์นและพืชใกล้เคียงเฟิร์น' },
        { value: 'พืชเมล็ดเปลือย' },
        { value: 'พืชใบเลี้ยงเดี่ยว' },
        { value: 'พืชใบเลี้ยงคู่' },
      ],
    };
  },
  Zone() {
    return {
      Zone: null,
      options: [
        { value: null },
        { value: 'Zone A' },
        { value: 'Zone B' },
        { value: 'Zone C' },
        { value: 'Zone D' },
        { value: 'Zone E' },
        { value: 'Zone F' },
        { value: 'Zone G' },
        { value: 'Zone H' },
        { value: 'Zone I' },
      ],
    };
  },
};
</script>
<style scoped>
button {
  background-color: #663366;
  width: 3cm;
}
</style>
