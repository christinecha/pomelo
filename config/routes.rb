Rails.application.routes.draw do
  resources :quotes
  root 'static#home'
  get 'team', to: 'static#team'
  get 'services', to: 'static#services'
  get 'contact', to: 'static#contact'
end
