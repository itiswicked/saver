class Api::PlacesController < ApplicationController
  def index
    @places = Place.includes(:category)
    render json: @places, include: {category: {only: :name}}
  end
end
