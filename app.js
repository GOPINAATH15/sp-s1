/**
 * Master-Detail Program Viewer Logic
 * Left sidebar list + Center display of selected program
 * Pure code rendering directly from PDF records - Zero unwanted tags/spans
 */

// Application State
const STATE = {
  selectedId: "java-01",
  selectedFileIdx: 0,
  filter: "all",           // 'all' | 'java' | 'adbms'
  searchQuery: ""
};

// DOM References
const sidebarEl = document.getElementById("sidebar");
const programListEl = document.getElementById("program-list");
const mainViewerEl = document.getElementById("main-viewer");
const searchInputEl = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const filterTabs = document.querySelectorAll(".filter-tab");
const copyAllBtn = document.getElementById("copy-all-btn");
const sidebarToggleBtn = document.getElementById("sidebar-toggle-btn");
const toastEl = document.getElementById("toast");

// Escape HTML for safe insertion in titles and text
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Line Numbers Generator
function generateLineNumbers(code) {
  const count = code.split("\n").length;
  let html = "";
  for (let i = 1; i <= count; i++) {
    html += `<div>${i}</div>`;
  }
  return html;
}

// ============================================================================
// DATA FILTERING
// ============================================================================

function getFilteredList() {
  return PRACTICALS_DATA.filter(item => {
    // Filter tab
    if (STATE.filter !== "all" && item.subject !== STATE.filter) {
      return false;
    }

    // Search query
    if (STATE.searchQuery.trim() !== "") {
      const q = STATE.searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchNum = item.number.toLowerCase().includes(q);
      const matchCat = item.category.toLowerCase().includes(q);
      const matchCode = item.files.some(f => f.code.toLowerCase().includes(q) || f.name.toLowerCase().includes(q));

      if (!matchTitle && !matchNum && !matchCat && !matchCode) {
        return false;
      }
    }

    return true;
  });
}

// ============================================================================
// RENDER LEFT SIDEBAR
// ============================================================================

function renderSidebar() {
  const filtered = getFilteredList();

  if (filtered.length === 0) {
    programListEl.innerHTML = `<div class="no-match">No programs match your search</div>`;
    return;
  }

  const javaList = filtered.filter(p => p.subject === "java");
  const adbmsList = filtered.filter(p => p.subject === "adbms");

  let html = "";

  if (javaList.length > 0 && (STATE.filter === "all" || STATE.filter === "java")) {
    html += `<div class="list-section-title">☕ Java Programs (${javaList.length})</div>`;
    javaList.forEach(item => {
      const isActive = item.id === STATE.selectedId ? "active" : "";
      html += `
        <button class="program-item ${isActive}" data-id="${item.id}">
          <span class="item-badge">J${item.number}</span>
          <span class="item-title">${escapeHtml(item.title)}</span>
        </button>
      `;
    });
  }

  if (adbmsList.length > 0 && (STATE.filter === "all" || STATE.filter === "adbms")) {
    html += `<div class="list-section-title" style="margin-top: 8px;">🗄️ ADBMS Programs (${adbmsList.length})</div>`;
    adbmsList.forEach(item => {
      const isActive = item.id === STATE.selectedId ? "active" : "";
      html += `
        <button class="program-item ${isActive}" data-id="${item.id}">
          <span class="item-badge">DB${item.number}</span>
          <span class="item-title">${escapeHtml(item.title)}</span>
        </button>
      `;
    });
  }

  programListEl.innerHTML = html;

  // Add click listeners to sidebar items
  programListEl.querySelectorAll(".program-item").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      if (STATE.selectedId !== id) {
        STATE.selectedId = id;
        STATE.selectedFileIdx = 0; // Reset to first file
        renderSidebar();
        renderCenterViewer();
      }
      // On mobile, close sidebar after selection
      if (window.innerWidth <= 850) {
        sidebarEl.classList.remove("open");
      }
    });
  });
}

// ============================================================================
// RENDER CENTER MAIN VIEWER
// ============================================================================

function renderCenterViewer() {
  const current = PRACTICALS_DATA.find(p => p.id === STATE.selectedId) || PRACTICALS_DATA[0];
  if (!current) return;

  // Calculate previous and next program
  const currentIndex = PRACTICALS_DATA.findIndex(p => p.id === current.id);
  const prevProgram = currentIndex > 0 ? PRACTICALS_DATA[currentIndex - 1] : null;
  const nextProgram = currentIndex < PRACTICALS_DATA.length - 1 ? PRACTICALS_DATA[currentIndex + 1] : null;

  const activeFile = current.files[STATE.selectedFileIdx] || current.files[0];
  const lineNumbers = generateLineNumbers(activeFile.code);
  const isJava = current.subject === "java";
  const badgeText = isJava ? `JAVA • PROGRAM ${current.number}` : `ADBMS • PROGRAM ${current.number}`;

  // Multi-file tabs
  let fileTabsHtml = "";
  if (current.files.length > 1) {
    fileTabsHtml = `<div class="file-bar">`;
    current.files.forEach((file, idx) => {
      const isActive = idx === STATE.selectedFileIdx ? "active" : "";
      fileTabsHtml += `
        <button class="file-tab ${isActive}" data-idx="${idx}">
          📄 ${escapeHtml(file.name)}
        </button>
      `;
    });
    fileTabsHtml += `</div>`;
  }

  // Bottom navigation
  const bottomNavHtml = `
    <div class="bottom-nav">
      <button class="nav-link-btn" id="prev-btn" ${!prevProgram ? 'disabled' : ''}>
        ← ${prevProgram ? escapeHtml(prevProgram.title) : 'Previous'}
      </button>
      <button class="nav-link-btn" id="next-btn" ${!nextProgram ? 'disabled' : ''}>
        ${nextProgram ? escapeHtml(nextProgram.title) : 'Next'} →
      </button>
    </div>
  `;

  mainViewerEl.innerHTML = `
    <div class="viewer-wrapper">
      <article class="program-card">
        <!-- Card Top Bar -->
        <div class="card-top">
          <div class="card-info">
            <div class="card-badge-row">
              <span class="subject-badge">${badgeText}</span>
              <span class="category-badge">${escapeHtml(current.category)}</span>
            </div>
            <h1 class="program-heading">${escapeHtml(current.title)}</h1>
            <p class="program-desc">${escapeHtml(current.description)}</p>
          </div>

          <div class="card-actions">
            <button class="copy-btn" id="copy-code-btn">
              <span>📋</span> Copy Code
            </button>
            <button class="download-btn" id="download-file-btn" title="Download ${escapeHtml(activeFile.name)}">
              <span>⬇️</span> Download
            </button>
          </div>
        </div>

        <!-- Multi-file switcher (if applicable) -->
        ${fileTabsHtml}

        <!-- Code Block with Line Numbers (Rendered Purely via textContent) -->
        <div class="code-area">
          <div class="line-numbers">${lineNumbers}</div>
          <pre class="code-pre"><code id="code-display"></code></pre>
        </div>
      </article>

      <!-- Bottom Next/Previous Navigation -->
      ${bottomNavHtml}
    </div>
  `;

  // Set the code text purely via textContent - guarantees 100% exact code with zero injected tags
  const codeDisplayEl = document.getElementById("code-display");
  if (codeDisplayEl) {
    codeDisplayEl.textContent = activeFile.code;
  }

  // Attach event handlers
  attachViewerEvents(current, activeFile, prevProgram, nextProgram);
}

// ============================================================================
// EVENT ATTACHMENT
// ============================================================================

function attachViewerEvents(current, activeFile, prevProgram, nextProgram) {
  // File Tabs
  document.querySelectorAll(".file-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const idx = parseInt(tab.dataset.idx, 10);
      STATE.selectedFileIdx = idx;
      renderCenterViewer();
    });
  });

  // Copy Code Button
  const copyBtn = document.getElementById("copy-code-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(activeFile.code).then(() => {
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = `<span>✓</span> Copied!`;
        showToast(`Copied ${activeFile.name} to clipboard`);
        setTimeout(() => {
          copyBtn.classList.remove("copied");
          copyBtn.innerHTML = `<span>📋</span> Copy Code`;
        }, 1800);
      });
    });
  }

  // Download File Button
  const downloadBtn = document.getElementById("download-file-btn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const filename = activeFile.name.split("/").pop();
      downloadFile(filename, activeFile.code);
      showToast(`Downloaded ${filename}`);
    });
  }

  // Next / Previous Navigation
  const prevBtn = document.getElementById("prev-btn");
  if (prevBtn && prevProgram) {
    prevBtn.addEventListener("click", () => {
      STATE.selectedId = prevProgram.id;
      STATE.selectedFileIdx = 0;
      renderSidebar();
      renderCenterViewer();
      scrollToActiveSidebarItem();
    });
  }

  const nextBtn = document.getElementById("next-btn");
  if (nextBtn && nextProgram) {
    nextBtn.addEventListener("click", () => {
      STATE.selectedId = nextProgram.id;
      STATE.selectedFileIdx = 0;
      renderSidebar();
      renderCenterViewer();
      scrollToActiveSidebarItem();
    });
  }
}

function scrollToActiveSidebarItem() {
  const activeEl = programListEl.querySelector(".program-item.active");
  if (activeEl) {
    activeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// Download File helper
function downloadFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Toast
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2200);
}

// Copy All Practicals Bundle
function copyAllCode() {
  let bundle = "/* 1ST SEMESTER PRACTICALS - EXACT PROGRAMS FROM LAB RECORD */\n\n";
  PRACTICALS_DATA.forEach(p => {
    bundle += `\n/* ========================================================\n`;
    bundle += `   [${p.subject.toUpperCase()} ${p.number}] ${p.title}\n`;
    bundle += `   ======================================================== */\n\n`;
    p.files.forEach(f => {
      bundle += `// File: ${f.name}\n`;
      bundle += f.code + "\n\n";
    });
  });

  navigator.clipboard.writeText(bundle).then(() => {
    showToast("All 22 practical codes copied to clipboard!");
  });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
  // Filter tabs (All / Java / ADBMS)
  filterTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      filterTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.filter = btn.dataset.filter;
      renderSidebar();

      // If currently selected is not in visible list, select first visible
      const visible = getFilteredList();
      if (!visible.some(p => p.id === STATE.selectedId) && visible.length > 0) {
        STATE.selectedId = visible[0].id;
        STATE.selectedFileIdx = 0;
        renderCenterViewer();
      }
    });
  });

  // Search input
  searchInputEl.addEventListener("input", (e) => {
    STATE.searchQuery = e.target.value;
    clearSearchBtn.style.display = STATE.searchQuery ? "block" : "none";
    renderSidebar();

    const visible = getFilteredList();
    if (visible.length > 0 && !visible.some(p => p.id === STATE.selectedId)) {
      STATE.selectedId = visible[0].id;
      STATE.selectedFileIdx = 0;
      renderCenterViewer();
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInputEl.value = "";
    STATE.searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderSidebar();
    searchInputEl.focus();
  });

  // Copy All Button
  if (copyAllBtn) {
    copyAllBtn.addEventListener("click", copyAllCode);
  }

  // Mobile Sidebar Toggle
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", () => {
      sidebarEl.classList.toggle("open");
    });
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.target === searchInputEl) return;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      const idx = PRACTICALS_DATA.findIndex(p => p.id === STATE.selectedId);
      if (idx < PRACTICALS_DATA.length - 1) {
        STATE.selectedId = PRACTICALS_DATA[idx + 1].id;
        STATE.selectedFileIdx = 0;
        renderSidebar();
        renderCenterViewer();
        scrollToActiveSidebarItem();
      }
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      const idx = PRACTICALS_DATA.findIndex(p => p.id === STATE.selectedId);
      if (idx > 0) {
        STATE.selectedId = PRACTICALS_DATA[idx - 1].id;
        STATE.selectedFileIdx = 0;
        renderSidebar();
        renderCenterViewer();
        scrollToActiveSidebarItem();
      }
    } else if (e.key === "/") {
      e.preventDefault();
      searchInputEl.focus();
    }
  });

  // Initial render
  renderSidebar();
  renderCenterViewer();
}

document.addEventListener("DOMContentLoaded", init);
