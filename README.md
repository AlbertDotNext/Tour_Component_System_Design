# tripadvisor-itenerary-server


## Setup

### PostgreSQL 

This app uses PostgreSQL. You will need an existing database and an existing user for this app to connect to. 

To install:
- brew install postgresql

To run:
- brew services start postgresql

To make a postgresql database from the terminal: 
createdb *databasename*
e.g. *createdb snaketours*

To create a user: 
createuser *username* --interactive 
e.g. *createuser snaketours --interactive*

Follow the prompts.  If it does not ask you for a password, then your server is not configured to need one.  This repo currently assumes you don't need passwords. 

### Troubleshooting (on a Mac)

#### psql: could not connect to server: No such file or directory

If you're on macOS and installed postgres via homebrew, try restarting it with `brew services restart postgresql`
If you're on Ubuntu, you can restart it with either `sudo service postgresql restart` or `sudo /etc/init.d/postgresql restart`

Still no go?

Did you restart your computer lately?  It might just be the case that postgresql thinks it's running when it isn't due to a crash or restart.  Reboot your computer.

STILL no go? Check that postgres is in fact running with the **ps** command, eg `ps auxw | grep post` or `ps -aef|grep postgres`.

You'll see a list of processes like 'logical replication launcher' and 'checkpointer' if it is: 
`501 15093     1   0  1:08PM ??         0:00.03 /usr/local/opt/postgresql/bin/postgres -D /usr/local/var/postgres
  501 15166 15093   0  1:08PM ??         0:00.00 postgres: checkpointer
  501 15167 15093   0  1:08PM ??         0:00.00 postgres: background writer
  501 15168 15093   0  1:08PM ??         0:00.00 postgres: walwriter
  501 15169 15093   0  1:08PM ??         0:00.00 postgres: autovacuum launcher
  501 15170 15093   0  1:08PM ??         0:00.00 postgres: stats collector
  501 15172 15093   0  1:08PM ??         0:00.00 postgres: logical replication launcher
  501 15212 11035   0  1:08PM ttys000    0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn postgres`

If you don't see these postgres processes running, it's safe to delete your postmaster.pid file -- it's afile that postgreSQL is supposed to actually delete when it exits.  If it failed to do that due to for example a crash, then, we gotta delete it:

- `launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist`
- `rm /usr/local/var/postgres/postmaster.pid`
- `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist`
**DON'T DO THIS if you aren't 100% certain that there are no postgres processes running.**. If you do it and there is a process running you might corrupt your database.

