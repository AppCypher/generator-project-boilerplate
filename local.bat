@echo off 
REM concatenates a specified folder with a command insid the directory 
REM if we have a folder (path/to/folder) containing an executable (do.bat), 
REM we want to have (path/to/folder/do)
SET folder=node_modules/.bin/
SET command=%folder%%*

%command%
