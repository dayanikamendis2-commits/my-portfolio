// ==================== PORTFOLIO JAVASCRIPT ====================

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully.");

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Close menu when clicking a link on mobile
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // ==================== PROJECT MODAL POPUP WITH GALLERY ====================
    const projModal = document.getElementById("projectModal");
    const projModalTitle = document.getElementById("projectModalTitle");
    const projModalTech = document.getElementById("projectModalTech");
    const projModalDesc = document.getElementById("projectModalDesc");
    const modalGallery = document.getElementById("modalGallery");
    const projCloseBtn = document.querySelector(".project-modal-close");

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.getAttribute("data-title");
            const tech = "Tech Stack: " + card.getAttribute("data-tech");
            const desc = card.getAttribute("data-desc");
            const imagesAttr = card.getAttribute("data-images");

            if (projModalTitle) projModalTitle.innerText = title;
            if (projModalTech) projModalTech.innerText = tech;
            if (projModalDesc) projModalDesc.innerText = desc;

            // Clear previous images
            if (modalGallery) {
                modalGallery.innerHTML = "";

                if (imagesAttr) {
                    const imagesArray = imagesAttr.split(",");
                    imagesArray.forEach(imgSrc => {
                        const imgTag = document.createElement("img");
                        imgTag.src = imgSrc.trim();
                        imgTag.alt = title;
                        modalGallery.appendChild(imgTag);
                    });
                }
            }

            if (projModal) {
                projModal.style.display = "flex";
            }
        });
    });

    if (projCloseBtn) {
        projCloseBtn.addEventListener("click", () => {
            if (projModal) projModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === projModal) {
            projModal.style.display = "none";
        }
    });

    // ==================== CERTIFICATE MODAL ====================
    const certModal = document.getElementById("certModal");
    const certCards = document.querySelectorAll(".cert-card");
    const certCloseBtn = document.querySelector(".cert-modal .modal-close");

    certCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector(".cert-img");
            const title = card.querySelector("h4");
            const place = card.querySelector(".place");
            const desc = card.querySelector(".desc");

            const modalImg = document.getElementById("modalImg");
            const modalTitle = document.getElementById("modalTitle");
            const modalPlace = document.getElementById("modalPlace");
            const modalDesc = document.getElementById("modalDesc");

            if (modalImg && img) modalImg.src = img.src;
            if (modalTitle && title) modalTitle.innerText = title.innerText;
            if (modalPlace && place) modalPlace.innerText = place.innerText;
            if (modalDesc && desc) modalDesc.innerText = desc.innerText;

            if (certModal) certModal.style.display = "flex";
        });
    });

    if (certCloseBtn) {
        certCloseBtn.addEventListener("click", () => {
            if (certModal) certModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === certModal) {
            certModal.style.display = "none";
        }
    });
});

// Interactive Terminal Logic
const terminalInput = document.getElementById('terminalInput');
const terminalBody = document.getElementById('terminalBody');

if (terminalInput) {
    terminalInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            
            // User input print karanna
            const userLine = document.createElement('div');
            userLine.innerHTML = `<span class="prompt">gothmi@portfolio:~$</span> ${terminalInput.value}`;
            terminalBody.insertBefore(userLine, terminalBody.lastElementChild);
            
            // Command eka check karala response eka denna
            const responseLine = document.createElement('div');
            responseLine.style.marginBottom = "8px";
            
            switch(command) {
                case 'help':
                    responseLine.innerHTML = `Available commands:<br>
                    - <span style="color: #58a6ff;">about</span>: Brief intro about Gothmi<br>
                    - <span style="color: #58a6ff;">skills</span>: Technical skills & stack<br>
                    - <span style="color: #58a6ff;">projects</span>: View key projects<br>
                    - <span style="color: #58a6ff;">contact</span>: Get in touch details<br>
                    - <span style="color: #58a6ff;">clear</span>: Clear terminal screen`;
                    break;
                case 'about':
                    responseLine.innerText = "I'm Gothmi Mendis, an IT student at SLIATE Kandy and a Quantity Surveyor/Developer passionate about building robust applications.";
                    break;
                case 'skills':
                    responseLine.innerText = "Tech Stack: Java, PHP, Laravel, Python, C#, SQL, JavaScript, HTML/CSS, NetBeans, MySQL.";
                    break;
                case 'projects':
                    responseLine.innerText = "1. AI-Driven Question Parser System\n2. Fresh Slice 65 Bakery Management System (Java/Swing)\n3. Mobile Shop Management System (PHP/MySQL)";
                    break;
                case 'contact':
                    responseLine.innerText = "You can reach out via the Contact section below or through the portfolio form!";
                    break;
                case 'clear':
                    // Output area eka empty karanna
                    const outputArea = terminalBody.querySelector('.terminal-output');
                    outputArea.innerHTML = `<p>Welcome to Gothmi Mendis Portfolio Terminal v1.0.0</p><p>Type <span class='highlight'>'help'</span> to see available commands.</p><br>`;
                    terminalInput.value = '';
                    return;
                case '':
                    responseLine.innerText = "";
                    break;
                default:
                    responseLine.innerHTML = `Command not found: ${command}. Type <span style="color: #58a6ff;">'help'</span> for available commands.`;
            }
            
            terminalBody.insertBefore(responseLine, terminalBody.lastElementChild);
            terminalInput.value = '';
            
            // Scroll down automatically
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });
}

// AI Chatbot Widget Logic (Safe Version)
document.addEventListener('DOMContentLoaded', function() {
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatPopup = document.getElementById('chatPopup');
    const closeChat = document.getElementById('closeChat');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');

    if (chatToggleBtn && chatPopup) {
        // Toggle chat popup
        chatToggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            chatPopup.classList.toggle('active');
            if (chatPopup.classList.contains('active') && chatInput) {
                chatInput.focus();
            }
        });

        if (closeChat) {
            closeChat.addEventListener('click', function() {
                chatPopup.classList.remove('active');
            });
        }

        // Send message function
        function handleUserMessage() {
            if (!chatInput) return;
            const text = chatInput.value.trim();
            if (!text) return;

            // User message display karanna
            const userMsgDiv = document.createElement('div');
            userMsgDiv.classList.add('chat-message', 'user-msg');
            userMsgDiv.textContent = text;
            chatBody.appendChild(userMsgDiv);
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;

            // Bot response generate karanna
            setTimeout(() => {
                const botMsgDiv = document.createElement('div');
                botMsgDiv.classList.add('chat-message', 'bot-msg');
                
                const lowerText = text.toLowerCase();
                if (lowerText.includes('project') || lowerText.includes('fresh slice') || lowerText.includes('parser')) {
                    botMsgDiv.textContent = "Gothmi has built systems like 'Fresh Slice 65' (Java/Swing bakery system), an AI-Driven Question Parser (Python/Laravel), and a Mobile Shop Management System!";
                } else if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('java') || lowerText.includes('php')) {
                    botMsgDiv.textContent = "Her core tech stack includes Java, PHP, Laravel, Python, C#, MySQL, and JavaScript.";
                } else if (lowerText.includes('contact') || lowerText.includes('hire') || lowerText.includes('email')) {
                    botMsgDiv.textContent = "You can reach out directly using the Contact form at the bottom of this portfolio!";
                } else {
                    botMsgDiv.textContent = "That's a great question! Feel free to explore the portfolio sections or check out her projects and skills for more details.";
                }
                
                chatBody.appendChild(botMsgDiv);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 600);
        }

        if (sendChatBtn) {
            sendChatBtn.addEventListener('click', handleUserMessage);
        }
        
        if (chatInput) {
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    handleUserMessage();
                }
            });
        }
    }
});