source "https://rubygems.org"
gem "jekyll", "~> 3.8.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-admin", "~> 0.9.0"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-sitemap", "~> 1.4.0"
  gem 'jekyll-algolia', '~> 1.0'
end

# Windows
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

