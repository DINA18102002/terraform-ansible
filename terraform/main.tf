terraform {
  backend "gcs" {
    bucket = "theena-terraform-ansible-bucket"
    prefix = "terraform-ansible"
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone = var.zone
}

resource "google_compute_instance" "ansible_vm" {
  name = "ansible-vm"
  machine_type = "e2-medium"
  zone = var.zone

  boot_disk {
    initialize_params {
      image = "ubuntu-os-cloud/ubuntu-2204-lts"
    }
  }
  network_interface {
    network = "default"

    access_config {
      
    }
  }
  metadata = {
    ssh-keys = "${var.ssh_user}:${file(var.public_key_path)}"
  }
  tags = ["ansible-vm"]
}

resource "google_compute_firewall" "allow_ssh" {
  name = "allow-ssh-ansible"
  network = "default"
    allow {
        protocol = "tcp"
        ports = ["22", "80"]
    }
    target_tags = [ "ansible-vm"]
    source_ranges = ["0.0.0.0/0"]
}