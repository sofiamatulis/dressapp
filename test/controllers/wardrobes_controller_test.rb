require 'test_helper'

class WardrobesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get wardrobes_index_url
    assert_response :success
  end

  test "should get show" do
    get wardrobes_show_url
    assert_response :success
  end

  test "should get edit" do
    get wardrobes_edit_url
    assert_response :success
  end

  test "should get create" do
    get wardrobes_create_url
    assert_response :success
  end

  test "should get new" do
    get wardrobes_new_url
    assert_response :success
  end

  test "should get destroy" do
    get wardrobes_destroy_url
    assert_response :success
  end

end
