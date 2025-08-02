<template>
  <div class="notes-layout">
    <div class="sidebar">
      <h1>📒 Мои заметки</h1>
      <p>Всего: {{ filteredNotes.length }}</p>
      <input class="search-input" v-model="filter" placeholder="Найти заметку..." />
      
      <!-- Кнопка создания новой заметки -->
      <button @click="createNewNote" class="new-note-btn">
        ✨ Новая заметка
      </button>

      <ul>
        <NoteItem
          v-for="(note, index) in filteredNotes"
          :key="index"
          :text="note"
          @delete="deleteNote(index)"
          @click="selectNote(index)"
        />
      </ul>
    </div>
    <div class="note-preview">
      <div v-if="selectedNote !== null">
        <h2>Заметка №{{ selectedIndex + 1 }}</h2>
        <textarea
          v-model="notes[selectedIndex]"
          placeholder="Начни писать заметку..."
          class="note-input"
        />
        <div class="note-actions">
          <button @click="deleteNote(selectedIndex)" class="delete-btn">Удалить</button>
        </div>
      </div>
      <div v-else>
        <p>Выберите заметку слева или создайте новую</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import NoteItem from '../components/NoteItem.vue'

const notes = ref([]) // список всех заметок
const filter = ref('')
const selectedIndex = ref(null)

const filteredNotes = computed(() =>
  notes.value.filter(note => 
    note.toLowerCase().includes(filter.value.toLowerCase())
  ))

const selectedNote = computed(() => {
  return selectedIndex.value !== null ? notes.value[selectedIndex.value] : null
})

function createNewNote() {
  // Создаем новую пустую заметку
  notes.value.push('Новая заметка')
  // Сразу открываем её для редактирования
  selectedIndex.value = notes.value.length - 1
}

function selectNote(index) {
  // Находим реальный индекс в оригинальном массиве
  const filteredNote = filteredNotes.value[index]
  const realIndex = notes.value.findIndex(note => note === filteredNote)
  selectedIndex.value = realIndex
}

function deleteNote(index) {
  notes.value.splice(index, 1)
  selectedIndex.value = null
}

onMounted(() => {
  const saved = localStorage.getItem('my-notes') // Получение объекта из локального хранилища
  if (saved) {
    notes.value = JSON.parse(saved) // Преобразование строки обратно в массив
  }
})

watch(notes, (newVal) => {
  localStorage.setItem('my-notes', JSON.stringify(newVal)) // преобразуем в строку, так как localStorage хранит именно строку
}, { deep: true }) // отслеживает вложенные изменения
</script>

<style scoped>
.notes-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 30%;
  padding: 1rem;
  border-right: 1px solid #ccc;
  overflow-y: auto;
}

.note-preview {
  flex: 1;
  padding: 2rem;
}

.new-note-btn {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.new-note-btn:hover {
  background-color: #0056CC;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 0.5rem;
  cursor: pointer;
}

.sidebar li.active {
  background-color: #f0f0f0;
  font-weight: bold;
}

.note-input {
  width: 100%;
  min-height: 300px;
  padding: 1rem;
  margin-bottom: 1rem;
  resize: vertical;
  font-size: 1rem;
  line-height: 1.5;
}

.note-actions {
  display: flex;
  gap: 0.5rem;
}

.delete-btn {
  background-color: #FF3B30;
  color: white;
}

.delete-btn:hover {
  background-color: #D70015;
}

.search-input {
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>