Rails.application.routes.draw do
  resources :quotes
  root 'static#home'

end
