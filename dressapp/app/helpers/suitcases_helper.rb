module SuitcasesHelper

  def active_if_first(index)
    if index == 0
      "active"
    else
      "inactive"
    end  
  end

end
