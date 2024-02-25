require 'uri'

ARGF.each_line do |line|
  puts URI.encode_www_form_component(line.chomp)
end
