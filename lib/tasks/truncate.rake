namespace :db do
  desc "Truncate all existing data"
  task :truncate => "db:load_config" do
   begin
    config = ActiveRecord::Base.configurations[::Rails.env]
    ActiveRecord::Base.establish_connection
    case config["adapter"]
      when "mysql", "postgresql"
        # ActiveRecord::Base.connection.execute("ALTER TABLE tablename DISABLE KEYS")
        ActiveRecord::Base.connection.tables.each do |table|
          unless table == "schema_migrations"
            ActiveRecord::Base.connection.execute("TRUNCATE #{table} CASCADE")
          end
        end
        # ActiveRecord::Base.connection.execute("ALTER TABLE tablename ENABLE KEYS")
      when "sqlite", "sqlite3"
        ActiveRecord::Base.connection.tables.each do |table|
          ActiveRecord::Base.connection.execute("DELETE FROM #{table}")
          ActiveRecord::Base.connection.execute("DELETE FROM sqlite_sequence where name='#{table}'")
        end
       ActiveRecord::Base.connection.execute("VACUUM")
     end
    end
  end
end

# namespace :db do
#   desc "Truncate all tables"
#   task :truncate => :environment do
#     conn = ActiveRecord::Base.connection
#     tables = conn.execute("show tables").map { |r| r[0] }
#     tables.delete "schema_migrations"
#     tables.each { |t| conn.execute("TRUNCATE #{t} CASCADE") }
#   end
# end
