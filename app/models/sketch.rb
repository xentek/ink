class Sketch < ActiveRecord::Base
  belongs_to :user
  belongs_to :tree
  belongs_to :parent, class_name: 'Sketch' 
  has_many :children, class_name: 'Sketch', foreign_key: 'parent_id'
end
