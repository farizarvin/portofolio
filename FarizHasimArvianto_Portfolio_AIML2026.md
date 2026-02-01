# Coding Portfolio
**Fariz Hasim Arvianto**

---

## Project 1: SafePay.AI 🏆
### *1st Place - Online Fraud Detection System*

**Project Name:** SafePay.AI - Real-time Online Fraud Detection System

**Role in Project:** Full-Stack Developer & Machine Learning Engineer

**Project Description:**
SafePay.AI adalah sistem deteksi penipuan online yang mampu mengidentifikasi transaksi mencurigakan secara real-time. Proyek ini dibangun untuk mengatasi peningkatan kasus penipuan dalam transaksi digital dengan memanfaatkan pendekatan machine learning untuk klasifikasi transaksi.

**Technical Explanation:**

*1. Machine Learning Pipeline:*
- Menggunakan **Scikit-learn** untuk membangun model klasifikasi dengan algoritma Random Forest dan XGBoost
- Dataset diproses melalui tahapan preprocessing: handling missing values, feature engineering (ekstraksi fitur dari pola transaksi), dan normalization
- Model di-train dengan teknik cross-validation untuk menghindari overfitting
- Evaluasi menggunakan metrics: precision, recall, F1-score karena dataset memiliki class imbalance

*2. Backend Architecture:*
- **FastAPI** dipilih sebagai framework backend karena performa tinggi dan native async support
- Implementasi REST API endpoints untuk menerima data transaksi dan mengembalikan prediksi risk score
- Model ML di-serialize menggunakan joblib dan di-load ke memory untuk inference cepat

*3. Frontend & Deployment:*
- **Next.js** dengan TypeScript untuk type safety dan better developer experience
- **Tailwind CSS** untuk responsive design dan rapid UI development
- Deploy ke **AWS EC2** dengan **PM2** sebagai process manager untuk zero-downtime deployment
- Frontend di-host di **Vercel** dengan automatic CI/CD dari GitHub

**Links:**
- Demo: https://safepay-theta.vercel.app
- GitHub: https://github.com/farizarvin/safepay.ai

---

## Project 2: Dailyku
### *Student Mental Health Monitoring with AI*

**Project Name:** Dailyku - AI-Powered Student Depression Monitoring System

**Role in Project:** Lead Developer & AI/ML Engineer

**Project Description:**
Dailyku adalah sistem akademik dan absensi untuk siswa SMA yang terintegrasi dengan fitur monitoring kesehatan mental. Sistem ini menggunakan kombinasi BERT untuk analisis sentimen dari diary harian siswa dan YOLO untuk face detection pada absensi, memberikan insight kepada konselor sekolah untuk intervensi dini.

**Technical Explanation:**

*1. Natural Language Processing (BERT):*
- Implementasi **BERT (Bidirectional Encoder Representations from Transformers)** untuk analisis sentimen Bahasa Indonesia
- Fine-tuning pretrained model IndoBERT pada dataset diary siswa yang di-label secara manual
- Model mengklasifikasikan mood siswa dari teks diary ke kategori: positif, netral, butuh perhatian, kritis
- Menggunakan **HuggingFace Transformers** library untuk inference dan model management

*2. Computer Vision (YOLO):*
- **YOLOv8** untuk real-time face detection pada sistem absensi
- Preprocessing: face alignment dan normalization sebelum matching
- Face recognition menggunakan embedding comparison dengan threshold-based matching
- Optimized untuk berjalan di browser menggunakan webcam dengan TensorFlow.js

*3. System Architecture:*
- **Laravel** sebagai main backend dengan Blade templating dan **Livewire** untuk reactive components
- **FastAPI** microservice untuk ML inference (BERT dan YOLO) dengan endpoints terpisah
- **JWT authentication** untuk secure API communication antar services
- Database MySQL dengan proper indexing untuk query optimization

*4. Mental Health Dashboard:*
- Visualisasi trend mood siswa menggunakan Chart.js
- Alert system untuk konselor ketika siswa menunjukkan pola negatif berturut-turut
- DASS-21 questionnaire integration untuk assessment formal

**Links:**
- Demo: https://dailyku.doscom.org
- GitHub: https://github.com/farizarvin/Depresi-monitoring

---

## Project 3: Kampus Bot AI
### *Intelligent Campus Assistant with RAG*

**Project Name:** Kampus Bot AI - Retrieval Augmented Generation Chatbot

**Role in Project:** AI Engineer & Backend Developer

**Project Description:**
Kampus Bot AI adalah chatbot cerdas yang mampu menjawab pertanyaan seputar kampus dengan respons natural dalam Bahasa Indonesia. Sistem ini menggunakan arsitektur RAG (Retrieval Augmented Generation) untuk menghasilkan jawaban yang akurat berdasarkan dokumen kampus yang ada.

**Technical Explanation:**

*1. RAG (Retrieval Augmented Generation) Architecture:*
- Pipeline RAG: Query → Embedding → Vector Search → Context Retrieval → LLM Generation
- Dokumen kampus di-chunk dan di-embed menggunakan sentence-transformers
- Vector database menyimpan embeddings untuk efficient similarity search
- Retrieved context di-inject ke prompt LLM untuk grounded generation

*2. Intent Classification & NLP:*
- **K-NN (K-Nearest Neighbors)** classifier untuk intent recognition dari user query
- TF-IDF vectorization untuk feature extraction dari teks Bahasa Indonesia
- Multi-class classification untuk routing query ke handler yang tepat

*3. Sentiment Analysis:*
- Real-time sentiment analysis untuk memahami emosi user
- Mempengaruhi tone response dari chatbot (lebih empathetic jika user frustrated)
- Keyword extraction untuk logging dan analytics

*4. LLM Integration:*
- **Groq API** dengan model Llama 3.3 70B untuk high-quality text generation
- Prompt engineering dengan few-shot examples untuk konsistensi response
- **Ollama** sebagai fallback local model untuk privacy-sensitive queries
- Temperature dan top-p tuning untuk balance antara creativity dan accuracy

*5. Backend Stack:*
- **Django** sebagai web framework dengan REST API endpoints
- Async processing untuk non-blocking LLM calls
- Caching layer untuk frequently asked questions
- Logging system untuk conversation analytics

**Links:**
- GitHub: https://github.com/farizarvin/MiniRAG-Chat

---

## Technical Skills Summary

| Category | Technologies |
|----------|-------------|
| **Machine Learning** | TensorFlow, PyTorch, Scikit-learn, Keras, HuggingFace |
| **Deep Learning** | BERT, YOLO, CNN, Transformers |
| **Web Development** | Next.js, React, Django, FastAPI, Laravel |
| **Programming** | Python, TypeScript, Golang |
| **Database** | PostgreSQL, MySQL, MongoDB |
| **DevOps** | Docker, AWS, PM2, Nginx, Linux |

---

## Contact Information

- **Email:** farizarvin@gmail.com
- **LinkedIn:** [linkedin.com/in/fariz-hasim-arvianto](https://linkedin.com/in/fariz-hasim-arvianto/)
- **GitHub:** [github.com/farizarvin](https://github.com/farizarvin)

---

*Submitted for Apple Developer Institute for AIML @ UC Surabaya*
*Deadline: April 6, 2026*
