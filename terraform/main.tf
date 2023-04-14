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

resource "cloudflare_record" "cname" {
  zone_id = data.cloudflare_zone_id
  name    = "@"
  value   = var.vercel_domain
  type    = "CNAME"
  proxied = false
}
