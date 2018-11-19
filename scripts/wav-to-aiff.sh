#!/usr/bin/env ruby
require 'pry'

src_dir = ARGV[0]
dst_dir = ARGV[1]

if ARGV.length < 2
  puts "Usage wav-to-aif {src_dir} {dst_dir}"
  exit 0
end
Dir.glob("#{src_dir}/*.wav").
    each {|name|
      path = Pathname(name)
      dst_name = path.basename.sub(path.extname, '.aiff')
      puts "#{dst_dir}/#{dst_name}"
      `ffmpeg -i "#{path}" "#{dst_dir}/#{dst_name}"`
    }

