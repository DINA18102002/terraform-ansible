resource "google_container_cluster" "primary" {
  name     = var.cluster_name
  location = var.zone

  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.subnet.name

  remove_default_node_pool = true
  initial_node_count       = 1

  deletion_protection = false
  ip_allocation_policy {}

}

#----------------------------
# APP NODE POOL
#----------------------------

resource "google_container_node_pool" "app_nodes" {
  name     = "app-node-pool"
  location = var.zone
  cluster  = google_container_cluster.primary.name

  node_count = 1

  node_config {
    machine_type = "e2-medium"
    labels = {
      role = "application"
    }
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}

#----------------------------
# INFRA NODE POOL
#----------------------------

resource "google_container_node_pool" "infra_nodes" {
  name     = "infra-node-pool"
  location = var.zone
  cluster  = google_container_cluster.primary.name

  node_count = 1

  node_config {
    machine_type = "e2-medium"
    labels = {
      role = "infrastructure"
    }
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}