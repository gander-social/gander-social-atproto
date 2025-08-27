#!/usr/bin/env sh

# Example usage:
# ./with-external-db.sh psql postgresql://pg:password@localhost:5433/postgres -c 'select 1;'

dir=$(dirname $0)
. ${dir}/_common.sh

main "$@"