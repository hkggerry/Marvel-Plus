class ApplicationController < ActionController::API
  include ActionController::Cookies

  def encode_token(payload)
    JWT.encode(payload, ENV["AWT_SECRET"])
  end
end
