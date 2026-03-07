terraform {
  required_version = "1.8.4"

  cloud {
    organization = "simonknittel"

    workspaces {
      name = "simonknittelde"
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.52.1"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

data "cloudflare_zones" "main" {
  filter {
    name        = "simonknittel.de"
    lookup_type = "exact"
  }
}

resource "cloudflare_record" "root_cname" {
  zone_id = data.cloudflare_zones.main.zones[0].id
  name    = "@"
  value   = "216.198.79.1"
  type    = "A"
  proxied = false
  comment = "terraform; repository:simonknittel/simonknittel.de"
}

resource "cloudflare_record" "www_cname" {
  zone_id = data.cloudflare_zones.main.zones[0].id
  name    = "www"
  value   = "f2705ad081ddc4a3.vercel-dns-017.com."
  type    = "CNAME"
  proxied = false
  comment = "terraform; repository:simonknittel/simonknittel.de"
}
