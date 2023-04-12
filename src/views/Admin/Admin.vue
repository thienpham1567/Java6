<script setup lang="ts">
import { nextTick } from "vue";
import { computed } from "vue";
import { ref } from "vue";

const dialog = ref(false);
const dialogDelete = ref(false);
const headers = ref([
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", key: "calories" },
  { title: "Fat (g)", key: "fat" },
  { title: "Carbs (g)", key: "carbs" },
  { title: "Protein (g)", key: "protein" },
  { title: "Actions", key: "actions", sortable: false },
]);
const desserts = ref([]);
const editedIndex = ref(-1);
const editedItem = {
  name: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
};
const defaultItem = {
  name: "",
  calories: 0,
  fat: 0,
  carbs: 0,
  protein: 0,
};
const formTitle = computed(() =>
  editedIndex.value === -1 ? "New Item" : "Edit Item"
);

function editItem(item) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem = Object.assign({}, item);
  dialog.value = true;
}

function deleteItem(item) {
  editedIndex.value = desserts.value.indexOf(item);
  editedItem = Object.assign({}, item);
  dialogDelete.value = true;
}
function deleteItemConfirm() {
  desserts.value.splice(editedIndex.value, 1);
  closeDelete();
}

function close() {
  dialog.value = false;
  nextTick(() => {
    editedItem = Object.assign({}, defaultItem);
    editedIndex.value = -1;
  });
}

function closeDelete() {
  dialogDelete.value = false;
  nextTick(() => {
    editedItem = Object.assign({}, defaultItem);
    editedIndex.value = -1;
  });
}

function save() {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem);
  } else {
    desserts.value.push(editedItem);
  }
  close();
}

let drawer = ref(true);
let rail = ref(true);
</script>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
        color="light-blue-darken-3"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="Admin"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-truck-alert"
            title="Orders"
            value="orders"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-store-alert"
            title="Products"
            value="products"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group"
            title="Users"
            value="users"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-alpha-b-box"
            title="Brands"
            value="brands"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-shape-plus"
            title="Categories"
            value="categories"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :sort-by="[{ key: 'calories', order: 'asc' }]"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>My CRUD</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ props }">
                  <v-btn color="primary" dark class="mb-2" v-bind="props">
                    New Item
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.name"
                            label="Dessert name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.calories"
                            label="Calories"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.fat"
                            label="Fat (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.carbs"
                            label="Carbs (g)"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.protein"
                            label="Protein (g)"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">
                    Are you sure you want to delete this item?
                  </v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="closeDelete"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="deleteItemConfirm"
                    >
                      OK
                    </v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon size="small" class="me-2" @click="editItem(item.raw)">
              mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteItem(item.raw)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-main>
    </v-layout>
  </v-card>
</template>
