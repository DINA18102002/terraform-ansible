# 🚀 Production-Ready Fullstack CI/CD Pipeline on GCP

This project demonstrates an end-to-end DevOps pipeline to deploy a full-stack application using modern tools and best practices.

## 🧱 Tech Stack

- **Cloud**: Google Cloud Platform (GCP)
 
- **Infrastructure as Code**: Terraform
  
- **Configuration Management**: Ansible
 
- **CI/CD**: GitHub Actions
 
- **Containerization**: Docker, Docker Compose
  
- **Reverse Proxy**: Nginx
  
- **Frontend**: React
  
- **Backend**: Node.js (Express)
  
- **Database**: MongoDB

---

## 🏗️ Architecture


User → Nginx → Frontend (React)
→ Backend (Node.js API) → MongoDB

---

## 📂 Project Structure


<img width="258" height="746" alt="image" src="https://github.com/user-attachments/assets/9c367d9a-9f1a-4efa-af5f-0a54b5ba1d1d" />


---

## ⚙️ CI/CD Workflow


Code Push
→
Docker Build & Push (Docker Hub)
→
Terraform Plan & Apply (GCP VM Provisioning)
→
Ansible Configuration (Server Setup)
→
Docker Compose Deployment
→
Live Application 🚀


---

## 🔑 Key Features

- ✅ Fully automated CI/CD pipeline using GitHub Actions
  
- ✅ Infrastructure provisioning using Terraform (VM + Firewall)
  
- ✅ Remote backend for Terraform state management
  
- ✅ Manual approval before Terraform apply (safe deployment)
  
- ✅ Server configuration using Ansible
  
- ✅ Dockerized full-stack application
  
- ✅ Nginx reverse proxy for routing
  
- ✅ Persistent storage using Docker volumes
  
- ✅ Destroy workflow (`destroy.yml`) for infrastructure cleanup  

---

## 📊 Metrics

- ⚡ 100% automated deployment
  
- ⏱️ ~5–7 minutes end-to-end execution time
  
- 🧩 4+ services (frontend, backend, database, reverse proxy)
  
- 🔁 Infrastructure recreated in a single pipeline run  

---

## 🌐 Live Demo

👉 http://34.29.46.38

---



## 🚀 How to Run Locally

### 1. Clone repo

git clone https://github.com/DINA18102002/terraform-ansible

cd <your-repo>/fullstackapp

## 2. Run using Docker Compose
docker-compose up -d

## 3. Access app
http://localhost



## 🔥 Deployment (CI/CD)

  Push code to main branch
  
## GitHub Actions will:

→ Build & push Docker images

→ Provision infrastructure (Terraform)

→ Configure server (Ansible)

→ Deploy application



## 🧹 Destroy Infrastructure

Run manually via GitHub Actions:

Trigger destroy.yml

This will delete all GCP resources



## 🧠 Key Learnings

→ Infrastructure as Code (Terraform)

→ Configuration management (Ansible)

→ CI/CD automation (GitHub Actions)

→ Container orchestration using Docker Compose

→ Reverse proxy setup using Nginx

→ Data persistence using volumes

→ Safe deployments with approval gates



## 📌 Future Improvements

• Kubernetes (GKE / EKS) deployment

• Monitoring (Prometheus + Grafana)

• Logging (ELK Stack)

• Auto-scaling

<img width="1861" height="1000" alt="1" src="https://github.com/user-attachments/assets/781c894e-3e6c-4828-a4fc-49d49d81cb1c" />


## 🤝 Contributing

Feel free to fork, improve, and raise PRs!


## 📬 Contact

LinkedIn: https://linkedin.com/in/dina18

GitHub: https://github.com/DINA18102002
