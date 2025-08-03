import os

from snowflake.connector import DictCursor, connect

connect_config = {}
connect(**connect_config)
