import os

from snowflake.connector import DictCursor, connect

class MySnowflakeTest:
  def snowflake_test():
    connect_config = {}
    connect(**connect_config)
