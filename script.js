// Kode Google API
const GOOGLE_API_KEY = "AIzaSyD2uZxdn2hL6Mocy-iPrn7b9zwSe8JE1SI";
const API_REQUEST_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GOOGLE_API_KEY}`;

// Tambahkan variabel ini di dekat variabel global lainnya
const botName = "AcongBot";
const userName = "Bang";
let customInstructions = "Jawab dengan santai, gunakan emot, dan berikan jawaban singkat.";

// Tambahkan ini di dekat variabel global lainnya (setelah let customInstructions)
const programmedResponses = {
  "siapa namamu": "Saya adalah AcongBot, asisten virtual yang siap membantu!",
  "siapa kamu": "Saya AcongBot, asisten AI yang siap membantu kebutuhan Anda.",
  "siapa pengembangmu": "Saya dikembangkan oleh Mas Amba, seorang programmer Indonesia yang berfokus pada teknologi AI lokal.",
  "Buat gambar": "Maaf, saya tidak dapat membuat gambar secara langsung karena saya adalah asisten berbasis teks. Namun, saya dapat membantu Anda dengan ide, konsep, atau deskripsi yang rinci untuk gambar yang ingin Anda buat. Jika Anda memiliki ide tertentu untuk gambar, beri tahu saya! Saya akan membantu memberikan detailnya. 😊 ",
  "siapa developermu": "Developer saya adalah Mas Amba yang fokus pada pengembangan AI di Indonesia",
  "siapa nama pengembangmu": "Saya dikembangkan oleh Mas Amba, seorang programmer Indonesia yang fokus pada AI.",
   "siapa yang mengembangkanmu": "Tuan, saya AcongBot dikembangkan oleh Mas Amba.",
   "siapa yang membuatmu": "Tuan, saya AcongBot dibuat dan dikembangkan oleh Mas Amba."
   
};
// Tambahkan preset instruksi
const instructionPresets = {
  "normal": "Jawab dengan profesional dan informatif.",
  "serius": "Jawab dengan tingkat keseriusan maksimal, tanpa humor dan spekulasi, jawab dengan benar dan jelas berdasarkan fakta.",
  "santai": "Jawab dengan santai, gunakan emot, dan berikan jawaban singkat.",
  "detail": "Berikan jawaban sangat detail dan komprehensif untuk setiap pertanyaan.",
  "lucu": "Jawab dengan gaya humor dan sertakan lelucon dalam setiap jawaban. 😂"
};
// Tambahkan setelah deklarasi variabel global
const translations = {
  id: {
    // Header & buttons
    
    "newChat": "Obrolan Baru",
    "clearChat": "Hapus Semua Obrolan",
    "copyAllMessages": "Salin Semua Pesan",
    "customInstructions": "Atur Instruksi AI",
    "selectPreset": "Pilih Preset",
    "programmedResponses": "Atur Respons AI",
    "settings": "Pengaturan",
    "chatHistory": "Riwayat Chat:",
    "startNewChat": "Mulai percakapan baru dengan AI",
    "startChat": "Mulai Chat",
    
    // Features
    "createImage": "Buat gambar",
    "summarizeText": "Rangkum teks",
    "writeCode": "Tulis kode",
    "analyzeData": "Analisis data",
    "other": "Lainnya",
    
    // Input placeholder
    "askAnything": "Tanyakan apa saja",
    
    // Settings
    "settingsTitle": "Pengaturan",
    "appearance": "Tampilan",
    "about": "Tentang",
    "reportBug": "Laporkan Bug",
    "lightMode": "Mode Terang",
    "fontSize": "Ukuran Font",
    "language": "Bahasa",
    "small": "Kecil",
    "medium": "Sedang",
    "large": "Besar",
    "aboutTitle": "Tentang AcongBot",
    "aboutDescription": "Masih Beta bg, wajar kalau banyak bug. Fuck🖕",
    "developer": "Dikembangkan oleh: Mas Amba",
    "contact": "Kontak:",
    "reportBugTitle": "Laporkan Bug",
    "reportBugDescription": "Temukan bug? Bantu kami memperbaikinya dengan melaporkannya di bawah ini:",
    "bugPlaceholder": "Jelaskan bug yang Anda temukan...",
    "submitReport": "Kirim Laporan"
  },
  en: {
    // Header & buttons
    "newChat": "New Chat",
    "clearChat": "Clear All Chats",
    "copyAllMessages": "Copy All Messages",
    "customInstructions": "Set AI Instructions",
    "selectPreset": "Select Preset",
    "programmedResponses": "Manage AI Responses",
    "settings": "Settings",
    "chatHistory": "Chat History:",
    "startNewChat": "Start a new conversation with AI",
    "startChat": "Start Chat",
    
    // Features
    "createImage": "Create image",
    "summarizeText": "Summarize text",
    "writeCode": "Write code",
    "analyzeData": "Analyze data",
    "other": "Others",
    
    // Input placeholder
    "askAnything": "Ask anything",
    
    // Settings
    "settingsTitle": "Settings",
    "appearance": "Appearance",
    "about": "About",
    "reportBug": "Report Bug",
    "lightMode": "Light Mode",
    "fontSize": "Font Size",
    "language": "Language",
    "small": "Small",
    "medium": "Medium",
    "large": "Large",
    "aboutTitle": "About AcongBot",
    "aboutDescription": "This AI is still in Beta bro, it's natural that there are lots of bugs. Fuck🖕",
    "developer": "Developed by: Mas Amba",
    "contact": "Contact:",
    "reportBugTitle": "Report Bug",
    "reportBugDescription": "Found a bug? Help us fix it by reporting it below:",
    "bugPlaceholder": "Describe the bug you found...",
    "submitReport": "Submit Report"
  }
};


// Fungsi untuk update instruksi kustom
function updateCustomInstructions() {
  const newInstructions = prompt("Masukkan instruksi untuk Rexx", customInstructions);
  if (newInstructions !== null) {
    customInstructions = newInstructions;
    alert("Instruksi berhasil diperbarui!");
  }
}

// Fungsi untuk memilih preset instruksi
function selectInstructionPreset() {
  const presetKeys = Object.keys(instructionPresets);
  let message = "Pilih preset instruksi (masukkan nomor):\n";
  
  presetKeys.forEach((key, index) => {
    message += `${index + 1}. ${key}\n`;
  });
  
  const selection = prompt(message);
  if (selection !== null && !isNaN(selection)) {
    const index = parseInt(selection) - 1;
    if (index >= 0 && index < presetKeys.length) {
      customInstructions = instructionPresets[presetKeys[index]];
      alert(`Preset "${presetKeys[index]}" telah dipilih!`);
    }
  }
}
// Tambahkan setelah fungsi selectInstructionPreset()
function manageProgrammedResponses() {
  const action = prompt("Pilih tindakan:\n1. Lihat semua respons terprogram\n2. Tambah respons baru\n3. Hapus respons\n4. Edit respons");
  
  if (action === "1") {
    // Lihat semua respons
    let allResponses = "Daftar Respons Terprogram:\n\n";
    for (const key in programmedResponses) {
      allResponses += `"${key}": "${programmedResponses[key]}"\n\n`;
    }
    alert(allResponses);
  } 
  else if (action === "2") {
    // Tambah respons baru
    const newKey = prompt("Masukkan kata kunci pertanyaan:");
    if (newKey && newKey.trim() !== "") {
      const newResponse = prompt("Masukkan jawaban untuk pertanyaan tersebut:");
      if (newResponse && newResponse.trim() !== "") {
        programmedResponses[newKey.trim()] = newResponse.trim();
        alert("Respons berhasil ditambahkan!");
      }
    }
  }
  else if (action === "3") {
    // Hapus respons
    let keys = Object.keys(programmedResponses);
    let options = keys.map((key, index) => `${index + 1}. "${key}"`).join("\n");
    const keyToDelete = prompt(`Pilih nomor respons yang akan dihapus:\n${options}`);
    
    if (keyToDelete && !isNaN(keyToDelete)) {
      const index = parseInt(keyToDelete) - 1;
      if (index >= 0 && index < keys.length) {
        delete programmedResponses[keys[index]];
        alert("Respons berhasil dihapus!");
      }
    }
  }
  else if (action === "4") {
    // Edit respons
    let keys = Object.keys(programmedResponses);
    let options = keys.map((key, index) => `${index + 1}. "${key}"`).join("\n");
    const keyToEdit = prompt(`Pilih nomor respons yang akan diedit:\n${options}`);
    
    if (keyToEdit && !isNaN(keyToEdit)) {
      const index = parseInt(keyToEdit) - 1;
      if (index >= 0 && index < keys.length) {
        const selectedKey = keys[index];
        const currentResponse = programmedResponses[selectedKey];
        
        const editOption = prompt(`Pilih bagian yang ingin diedit:\n1. Kata kunci ("${selectedKey}")\n2. Jawaban ("${currentResponse}")\n3. Keduanya`);
        
        if (editOption === "1" || editOption === "3") {
          // Edit kata kunci
          const newKey = prompt("Masukkan kata kunci baru:", selectedKey);
          if (newKey && newKey.trim() !== "") {
            if (editOption === "1") {
              // Jika hanya edit kata kunci
              programmedResponses[newKey.trim()] = currentResponse;
              delete programmedResponses[selectedKey];
              alert("Kata kunci berhasil diubah!");
            } else if (editOption === "3") {
              // Jika edit keduanya, kita simpan kata kunci baru dulu
              delete programmedResponses[selectedKey];
              const newResponse = prompt("Masukkan jawaban baru:", currentResponse);
              if (newResponse && newResponse.trim() !== "") {
                programmedResponses[newKey.trim()] = newResponse.trim();
                alert("Kata kunci dan jawaban berhasil diubah!");
              }
            }
          }
        } else if (editOption === "2") {
          // Edit jawaban saja
          const newResponse = prompt("Masukkan jawaban baru:", currentResponse);
          if (newResponse && newResponse.trim() !== "") {
            programmedResponses[selectedKey] = newResponse.trim();
            alert("Jawaban berhasil diubah!");
          }
        }
      }
    }
  }
}



// Mengubah struktur chatnya untuk menyimpan percakapan
let currentChatId = Date.now().toString();
let conversationHistory = {};
let allChats = [];
let typingInterval = null;
let isTyping = false;
let currentTypingText = "";
let shouldStopTyping = false;

// Inisialisasi chat baru dengan ID
function initChat(chatId) {
  if (!conversationHistory[chatId]) {
    conversationHistory[chatId] = [];
  }
  return conversationHistory[chatId];
}

// Sekarang currentChat mengacu ke array percakapan yang aktif
let currentChat = initChat(currentChatId);

// Menyimpan chat ke localStorage
function saveChatsToStorage() {
  localStorage.setItem('chatbotConversations', JSON.stringify(conversationHistory));
  localStorage.setItem('chatbotAllChats', JSON.stringify(allChats));
  localStorage.setItem('currentChatId', currentChatId);
}

// Memuat chat dari localStorage
function loadChatsFromStorage() {
  const savedConversations = localStorage.getItem('chatbotConversations');
  const savedAllChats = localStorage.getItem('chatbotAllChats');
  const savedCurrentChatId = localStorage.getItem('currentChatId');
  
  if (savedConversations) {
    conversationHistory = JSON.parse(savedConversations);
  }
  
  if (savedAllChats) {
    allChats = JSON.parse(savedAllChats);
  }
  
  if (savedCurrentChatId) {
    currentChatId = savedCurrentChatId;
    currentChat = conversationHistory[currentChatId] || [];
  }
}

// Fungsi untuk menampilkan/menyembunyikan menu fitur dengan animasi dan blur
function toggleFeatures() {
  const featuresMenu = document.getElementById("featuresMenu");
  const chatBox = document.getElementById("chatBox");
  const inputArea = document.querySelector(".input-area");
  const overlay = document.getElementById("overlay");
  
  if (featuresMenu.classList.contains("visible")) {
  // Sembunyikan menu fitur
    featuresMenu.classList.remove("visible");
    chatBox.classList.remove("chat-blur");
    inputArea.classList.remove("chat-blur");
    overlay.classList.remove("visible");
    
 // Tambahkan delay untuk memberikan waktu animasi berjalan
    setTimeout(() => {
      overlay.style.pointerEvents = "none";
    }, 300);
  } else {
// Tampilkan menu fitur
    featuresMenu.classList.add("visible");
    chatBox.classList.add("chat-blur");
    inputArea.classList.add("chat-blur");
    overlay.classList.add("visible");
    overlay.style.pointerEvents = "auto";
  }
}

// Fungsi untuk mengecek apakah chat kosong dan menampilkan/menyembunyikan empty state
function checkEmptyChat() {
  const emptyState = document.getElementById("emptyState");
  const chatBox = document.getElementById("chatBox");
  
  if (currentChat.length === 0) {

// Jika chat kosong, tampilkan empty state dan sembunyikan chatBox
    if (emptyState) emptyState.style.display = "flex";
    chatBox.style.display = "none";
  } else {

 // Jika ada chat, sembunyikan empty state dan tampilkan chatBox
    if (emptyState) emptyState.style.display = "none";
    chatBox.style.display = "flex";
  }
}

// Tambahkan ini di dalam event listener DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.addEventListener("click", function() {
      toggleFeatures();
    });
  }
  
  loadChatsFromStorage();
  updateHistory();
  loadSettings(); // Pastikan ini dipanggil
  
  // Menampilkan chat yang aktif atau empty state
  if (currentChat.length > 0) {
    displayCurrentChat();
    document.getElementById("emptyState").style.display = "none";
  } else {
    document.getElementById("chatBox").style.display = "none";
    document.getElementById("emptyState").style.display = "flex";
  }
});
  
// Tambahkan event listener untuk menyembunyikan menu fitur setelah tombol fitur diklik
  document.querySelectorAll(".features button").forEach(button => {
  button.addEventListener("click", function() {
    toggleFeatures();
  });
});

function displayCurrentChat() {
  document.getElementById("chatBox").innerHTML = "";
  currentChat.forEach(item => {
    addBubble(item.text, item.sender, false);// false = tanpa animasi ketik
  });
}

const sidebar = document.getElementById("sidebar");
const menuButton = document.querySelector(".menu-button");

function toggleSidebar() {
  sidebar.classList.toggle("open");
}

document.addEventListener("click", function(e) {
  if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
    sidebar.classList.remove("open");
  }
});

menuButton.addEventListener("click", function(e) {
  e.stopPropagation();
});

sidebar.addEventListener("click", function(e) {
  e.stopPropagation();
});

function setPrompt(text) {
  document.getElementById("userInput").value = text;
  document.getElementById("userInput").focus();
}

function newChat() {
  // Simpan chat lama jika belum tersimpan
  if (currentChat.length > 0 && !allChats.includes(currentChatId)) {
    allChats.push(currentChatId);
  }
  
  // Buat ID baru untuk chat baru
  currentChatId = Date.now().toString();
  currentChat = initChat(currentChatId);
  
  document.getElementById("chatBox").innerHTML = "";
  
  // Atur judul ke "Obrolan baru"
  document.querySelector(".header-title").textContent = "Obrolan baru";
  
  updateHistory();
  saveChatsToStorage();
  
  // Tampilkan empty state ketika chat baru dibuat
  checkEmptyChat();
}

function clearChat() {
  if (confirm("Yakin ingin menghapus semua riwayat chat?")) {
    conversationHistory = {};
    allChats = [];
    currentChatId = Date.now().toString();
    currentChat = initChat(currentChatId);
    
    document.getElementById("chatBox").innerHTML = "";
    document.querySelector(".header-title").textContent = "Obrolan baru";
    updateHistory();
    saveChatsToStorage();
    checkEmptyChat();
  }
}

function updateHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  
  allChats.forEach((chatId) => {
    if (conversationHistory[chatId] && conversationHistory[chatId].length > 0) {
      const item = document.createElement("div");
      item.className = "history-item";
      
      // Ambil pesan pertama sebagai judul
      const firstUserMsg = conversationHistory[chatId].find(msg => msg.sender === 'user');
      item.textContent = firstUserMsg ? 
        (firstUserMsg.text.substring(0, 20) + (firstUserMsg.text.length > 20 ? "..." : "")) : 
        "Chat " + new Date(parseInt(chatId)).toLocaleDateString();
      
      item.onclick = () => loadChat(chatId);
      list.appendChild(item);
    }
  });
}

function loadChat(chatId) {
  currentChatId = chatId;
  currentChat = conversationHistory[chatId];
  
  // Perbarui judul berdasarkan chat yang dipilih
  const firstUserMsg = currentChat.find(msg => msg.sender === 'user');
  document.querySelector(".header-title").textContent = firstUserMsg ? 
    (firstUserMsg.text.substring(0, 20) + (firstUserMsg.text.length > 20 ? "..." : "")) : 
    "Chat " + new Date(parseInt(chatId)).toLocaleDateString();
  
  displayCurrentChat();
  document.getElementById("emptyState").style.display = "none";
  document.getElementById("chatBox").style.display = "flex";
  sidebar.classList.remove("open");
}

// Menambahkan event listener untuk tombol Enter pada input
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Fungsi untuk menghentikan animasi ketik
function stopTyping() {
  shouldStopTyping = true;
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }
  isTyping = false;
  document.getElementById("sendButton").innerHTML = '<span class="material-icons">send</span>';
  document.getElementById("sendButton").classList.remove("stop");
}

// Fungsi untuk menyalin semua pesan AI dalam percakapan saat ini
function copyAllBotMessages() {
  const botMessages = currentChat
    .filter(msg => msg.sender === 'bot')
    .map(msg => msg.text)
    .join("\n\n---\n\n");
  
  if (botMessages) {
    navigator.clipboard.writeText(botMessages)
      .then(() => {
        alert("Semua pesan AI telah disalin ke clipboard!");
      })
      .catch(err => {
        console.error("Gagal menyalin teks: ", err);
        alert("Gagal menyalin pesan. Silakan coba lagi.");
      });
  } else {
    alert("Tidak ada pesan AI dalam percakapan ini.");
  }
}

async function sendMessage() {
  
  // Jika sedang dalam proses mengetik, tombol kirim berfungsi sebagai tombol stop
  if (isTyping) {
    stopTyping();
    return;
  }

  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;
  input.value = "";

  // Pastikan empty state disembunyikan ketika pesan dikirim
  document.getElementById("emptyState").style.display = "none";
  document.getElementById("chatBox").style.display = "flex";

  addBubble(message, 'user');
  
  // Tambahkan pesan ke riwayat percakapan
  currentChat.push({ text: message, sender: 'user', timestamp: Date.now() });
  
  // Pastikan chat ID saat ini disimpan ke daftar semua chat
  if (!allChats.includes(currentChatId)) {
    allChats.push(currentChatId);
  }
  
  // Update judul berdasarkan pesan pertama
  if (currentChat.length === 1) {
    document.querySelector(".header-title").textContent = message.substring(0, 20) + (message.length > 20 ? "..." : "");
  }
  
  saveChatsToStorage();
  updateHistory();
// ===== TAMBAHAN: Cek apakah ada respons terprogram =====
  const messageLower = message.toLowerCase();
  let programmedReply = null;
  
  // Periksa apakah pesan cocok dengan salah satu kunci di programmedResponses
  for (const key in programmedResponses) {
    if (messageLower.includes(key.toLowerCase())) {
      programmedReply = programmedResponses[key];
      break;
    }
  }
  
  if (programmedReply) {
    // Gunakan respons terprogram
    setTimeout(() => {
      addBubble(programmedReply, 'bot', true);
      currentChat.push({ text: programmedReply, sender: 'bot', timestamp: Date.now() });
      saveChatsToStorage();
    }, 500);
    return;
  }
  try {
    // Tampilkan indikator sedang berpikir
    const thinkingIndicator = document.createElement("div");
    thinkingIndicator.className = "thinking-indicator";
    thinkingIndicator.innerHTML = `
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    `;
    document.getElementById("chatBox").appendChild(thinkingIndicator);
    thinkingIndicator.scrollIntoView({ behavior: "smooth" });

// Cari bagian ini dalam fungsi sendMessage() dimana Anda memformat riwayat percakapan:
    const formattedHistory = currentChat.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Dan tambahkan system prompt sebelum mengirim ke API:
    const systemPrompt = {
      role: "model",
      parts: [{ text: `Kamu adalah ${botName}, sebuah asisten AI. Kamu harus selalu mengidentifikasi dirimu sebagai ${botName} dan menyebut pengguna sebagai ${userName}. Jangan pernah mengacu pada dirimu sebagai Gemini, Google, atau nama lain. ${customInstructions}` }]
    };

    // Kemudian modifikasi body request menjadi:
    const response = await fetch(API_REQUEST_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [systemPrompt, ...formattedHistory], // Tambahkan system prompt
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048
        }
      })
    });

    // Hapus indikator sedang berpikir
    thinkingIndicator.remove();

    const data = await response.json();
    let reply;
    
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts) {
      reply = data.candidates[0].content.parts[0].text;
    } else {
      console.error("Response format tidak sesuai:", data);
      reply = "Tidak ada respons dari AI. Format respons tidak sesuai.";
    }
    
    // Setel status sedang mengetik dan ubah tombol kirim menjadi tombol stop
    isTyping = true;
    shouldStopTyping = false;
    document.getElementById("sendButton").innerHTML = '<span class="material-icons">stop_circle</span>';
    document.getElementById("sendButton").classList.add("stop");
    
    // Mulai animasi ketik
    addBubble(reply, 'bot', true);
    
    // Simpan pesan ke riwayat setelah selesai mengetik
    currentChat.push({ text: reply, sender: 'bot', timestamp: Date.now() });
    saveChatsToStorage();
    
  } catch (error) {
    console.error("Error saat mengirim pesan:", error);
    const errMsg = "Terjadi kesalahan, coba lagi nanti.";
    addBubble(errMsg, 'bot');
    currentChat.push({ text: errMsg, sender: 'bot', timestamp: Date.now() });
    saveChatsToStorage();
    
    // Hapus indikator sedang berpikir jika ada error
    const thinkingIndicator = document.querySelector(".thinking-indicator");
    if (thinkingIndicator) thinkingIndicator.remove();
  }
}

function addBubble(text, sender, typing = false) {
  const bubble = document.createElement("div");
  bubble.className = `bubble ${sender}`;

  const content = document.createElement("div");

  // Jika ini balasan dari AI (bot)
  if (sender === 'bot') {
    const isCodeBlock = text.includes("```");

    if (isCodeBlock) {
      // Render markdown langsung TANPA efek ketik
      content.innerHTML = marked.parse(text);
      hljs.highlightAll();

      // Tambahkan tombol salin hanya untuk kode
      const codeBlocks = content.querySelectorAll("pre code");
      codeBlocks.forEach(block => {
        const copyBtn = document.createElement("button");
        copyBtn.className = "copy-button";
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.onclick = () => {
          navigator.clipboard.writeText(block.innerText);
          copyBtn.innerHTML = '<i class="fas fa-check"></i>';
          setTimeout(() => (copyBtn.innerHTML = '<i class="fas fa-copy"></i>'), 1500);
        };
        block.parentElement.appendChild(copyBtn);
      });
    } else if (typing) {
      // Efek ketik untuk teks biasa
      isTyping = true;
      currentTypingText = text;
      let i = 0;
      const chars = text.split('');
      let tempText = '';

      // Tambahkan tombol salin di pojok kanan atas bubble
      const copyBtn = document.createElement("button");
      copyBtn.className = "bubble-copy-btn";
      copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
      copyBtn.title = "Salin pesan";
      copyBtn.onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1500);
      };
      bubble.appendChild(copyBtn);

      typingInterval = setInterval(() => {
        if (shouldStopTyping) {
          clearInterval(typingInterval);
          typingInterval = null;
          isTyping = false;
          content.innerHTML = marked.parse(text);
          hljs.highlightAll();
          document.getElementById("sendButton").innerHTML = '<span class="material-icons">send</span>';
          document.getElementById("sendButton").classList.remove("stop");
          return;
        }

         if (i < chars.length) {
          tempText += chars[i];
          content.innerHTML = marked.parse(tempText);
          i++;
        } else {
          clearInterval(typingInterval);
          typingInterval = null;
          isTyping = false;
          hljs.highlightAll(); // Highlight setelah selesai
          document.getElementById("sendButton").innerHTML = '<span class="material-icons">send</span>';
          document.getElementById("sendButton").classList.remove("stop");
        }
      }, 20);
    } else {
      content.innerHTML = marked.parse(text);
      hljs.highlightAll();
      
      // Tambahkan tombol salin di pojok kanan atas bubble untuk pesan biasa
      const copyBtn = document.createElement("button");
      copyBtn.className = "bubble-copy-btn";
      copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
      copyBtn.title = "Salin pesan";
      copyBtn.onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        copyBtn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        }, 1500);
      };
      bubble.appendChild(copyBtn);
    }
  } else {
    content.textContent = text; // untuk user
  }

  bubble.appendChild(content);
  document.getElementById("chatBox").appendChild(bubble);
  bubble.scrollIntoView({ behavior: "smooth" });
}

// Fungsi Pengaturan
function openSettings() {
  document.getElementById('settingsModal').style.display = 'block';
  sidebar.classList.remove("open");
}

function closeSettings() {
  document.getElementById('settingsModal').style.display = 'none';
}

// Fungsi Tab
function openTab(evt, tabName) {
  // Sembunyikan semua konten tab
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Hapus kelas "active" dari semua tombol tab
  const tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  // Tampilkan tab yang dipilih dan tambahkan kelas "active" ke tombol yang dipilih
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Fungsi Toggle Mode Gelap
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('light-mode');
  localStorage.setItem('lightMode', isDarkMode);
}

// Fungsi Ubah Ukuran Font
function changeFontSize() {
  const fontSize = document.getElementById('fontSizeSelect').value;
  document.documentElement.style.setProperty('--font-size', fontSize);
  localStorage.setItem('fontSize', fontSize);
}

// Tambahkan setelah fungsi changeFontSize()
function changeLanguage() {
  const lang = document.getElementById('languageSelect').value;
  setLanguage(lang);
  localStorage.setItem('language', lang);
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  
  const t = translations[lang];
  
  // Update sidebar
  document.querySelector('.sidebar button:nth-child(1)').innerHTML = `<i class="fas fa-plus"></i> ㅤ${t.newChat}`;
  document.querySelector('.sidebar button:nth-child(2)').innerHTML = `<i class="fas fa-trash"></i> ㅤ${t.clearChat}`;
  document.querySelector('.sidebar button:nth-child(3)').innerHTML = `<i class="fas fa-copy"></i> ㅤ${t.copyAllMessages}`;
  document.querySelector('.sidebar button:nth-child(4)').innerHTML = `<i class="fas fa-cog"></i> ㅤ${t.customInstructions}`;
  document.querySelector('.sidebar button:nth-child(5)').innerHTML = `<i class="fas fa-list"></i> ㅤ${t.selectPreset}`;
  document.querySelector('.sidebar button:nth-child(6)').innerHTML = `<i class="fas fa-robot"></i> ㅤ${t.programmedResponses}`;
  document.querySelector('.sidebar button:nth-child(7)').innerHTML = `<i class="fas fa-gear"></i> ㅤ${t.settings}`;
  document.querySelector('.sidebar h3:first-of-type').textContent = t.chatHistory;
  
  // Update empty state
  document.querySelector('.empty-state-text').textContent = t.startNewChat;
  document.querySelector('.start-chat-button').innerHTML = `<i class="fas fa-comment"></i> ${t.startChat}`;
  
  // Update features
  document.querySelector('.features button:nth-child(1)').innerHTML = `<i class="fas fa-image"></i> ㅤ${t.createImage}`;
  document.querySelector('.features button:nth-child(2)').innerHTML = `<i class="fas fa-file-alt"></i> ㅤ${t.summarizeText}`;
  document.querySelector('.features button:nth-child(3)').innerHTML = `<i class="fas fa-code"></i> ㅤ${t.writeCode}`;
  document.querySelector('.features button:nth-child(4)').innerHTML = `<i class="fas fa-database"></i> ㅤ${t.analyzeData}`;
  document.querySelector('.features button:nth-child(5)').innerHTML = `<i class="fas fa-list"></i> ㅤ${t.other}`;
  
  // Update input placeholder
  document.getElementById('userInput').placeholder = t.askAnything;
  
  // Update settings modal
  document.querySelector('.modal-header h2').textContent = t.settingsTitle;
  document.querySelector('.tab-button:nth-child(1)').textContent = t.appearance;
  document.querySelector('.tab-button:nth-child(2)').textContent = t.about;
  document.querySelector('.tab-button:nth-child(3)').textContent = t.reportBug;
  
  // Update appearance tab
  document.querySelector('#appearanceTab .setting-item:nth-child(1) span').textContent = t.lightMode;
  document.querySelector('#appearanceTab .setting-item:nth-child(2) span').textContent = t.fontSize;
  document.querySelector('#appearanceTab .setting-item:nth-child(3) span').textContent = t.language;
  document.querySelector('#fontSizeSelect option:nth-child(1)').textContent = t.small;
  document.querySelector('#fontSizeSelect option:nth-child(2)').textContent = t.medium;
  document.querySelector('#fontSizeSelect option:nth-child(3)').textContent = t.large;
  
  // Update about tab
  document.querySelector('#aboutTab h3').textContent = t.aboutTitle;
  document.querySelector('#aboutTab p:nth-child(2)').textContent = t.aboutDescription;
  document.querySelector('#aboutTab p:nth-child(3)').textContent = t.developer;
  document.querySelector('#aboutTab p:nth-child(4)').innerHTML = `${t.contact} <a href="mailto:acong8709@gmail.com" style="color: #666; text-decoration: underline;">acong8709@gmail.com</a>.`;
  
  // Update report tab
  document.querySelector('#reportTab h3').textContent = t.reportBugTitle;
  document.querySelector('#reportTab p').textContent = t.reportBugDescription;
  document.querySelector('#bugReport').placeholder = t.bugPlaceholder;
  document.querySelector('.report-button').textContent = t.submitReport;
}

// Fungsi Lapor Bug
function submitBugReport() {
  const bugReport = document.getElementById('bugReport').value.trim();
  if (bugReport) {
    alert("Terima kasih! Laporan bug Anda telah dikirim.");
    document.getElementById('bugReport').value = '';
    // Di sini Anda bisa menambahkan kode untuk mengirim laporan ke server
  } else {
    alert("Silakan masukkan deskripsi bug terlebih dahulu.");
  }
}

// Tutup modal ketika user klik di luar modal
window.onclick = function(event) {
  const modal = document.getElementById('settingsModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Modifikasi fungsi loadSettings()
function loadSettings() {
  // Muat pengaturan mode gelap
  const lightMode = localStorage.getItem('lightMode');
  if (lightMode === 'true') {
    document.body.classList.add('light-mode');
    document.getElementById('darkModeToggle').checked = true;
  }
  
  // Muat pengaturan ukuran font
  const fontSize = localStorage.getItem('fontSize');
  if (fontSize) {
    document.documentElement.style.setProperty('--font-size', fontSize);
    document.getElementById('fontSizeSelect').value = fontSize;
  }
  
  // Muat pengaturan bahasa
  const language = localStorage.getItem('language') || 'id';
  document.getElementById('languageSelect').value = language;
  setLanguage(language);
}
  

function openSettings() {
  // Tampilkan modal
  document.getElementById('settingsModal').style.display = 'block';
  
  // Tambahkan efek blur ke bagian utama
  document.querySelector('.main').classList.add('blur-effect');
}

function closeSettings() {
  // Sembunyikan modal
  document.getElementById('settingsModal').style.display = 'none';
  
  // Hapus efek blur
  document.querySelector('.main').classList.remove('blur-effect');
}

// Tambahkan event listener untuk menutup modal ketika mengklik di luar modal
window.onclick = function(event) {
  const modal = document.getElementById('settingsModal');
  if (event.target == modal) {
    closeSettings();
  }
}