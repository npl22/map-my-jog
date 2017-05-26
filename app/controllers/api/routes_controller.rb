class Api::RoutesController < ApplicationController
  def index
    @routes = Route.all
    render 'api/routes/index'
  end

  def create
    @route = Route.new(route_params)
    if @route.save
      render 'api/routes/show'
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def show
    @route = Route.find(params[:id])
    if @route
      render 'api/routes/show'
    else
      render json: ['Route not found'], status: 401
    end
  end

  def destroy
    route = Route.find(user_id: current_user.id)
    route.destroy!
  end

  private

  def route_params
    params.require(:route).permit(:title, :waypoints, :distance, :user_id)
  end
end
