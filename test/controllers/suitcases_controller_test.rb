require 'test_helper'

class SuitcasesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get suitcases_index_url
    assert_response :success
  end

  test "should get show" do
    get suitcases_show_url
    assert_response :success
  end

  test "should get edit" do
    get suitcases_edit_url
    assert_response :success
  end

  test "should get new" do
    get suitcases_new_url
    assert_response :success
  end

  test "should get create" do
    get suitcases_create_url
    assert_response :success
  end

  test "should get destroy" do
    get suitcases_destroy_url
    assert_response :success
  end

end
