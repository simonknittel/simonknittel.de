terraform {
  required_version = "1.4.4"

  cloud {
    organization = "simonknittel"

    workspaces {
      name = "simonknittelde"
    }
  }

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "4.3.0"
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
  zone_id = data.cloudflare_zones.main
  name    = "@"
  value   = "76.76.21.21"
  type    = "CNAME"
  proxied = false
}

resource "cloudflare_record" "www_cname" {
  zone_id = data.cloudflare_zones.main
  name    = "www"
  value   = "cname.vercel-dns.com"
  type    = "CNAME"
  proxied = true
}
