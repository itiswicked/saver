class Api::PlacesController < ApplicationController
  def index
    @places = Place.includes(:category)
    render json: @places, include: {category: {only: :name} }
  end

  def create
    @place = Place.new(place_params)
    @place.category = Category.find(params[:place][:category_id])
    if @place.save
      render nothing: true, status: 200
    else
      render nothing: true, status: 500
    end
  end

  private

  def place_params
    params
      .require(:place)
      .permit(:name, :description, :neighborhood)
  end
end
