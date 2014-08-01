Vagrant::Config.run do |config|
  config.vm.box = "heroku"
  config.vm.box_url = "https://dl.dropboxusercontent.com/s/rnc0p8zl91borei/heroku.box"
  config.vm.forward_port 3000, 13000
  config.vm.forward_port 4000, 14000
end
