## xlsx-csv-stdin

Simple wrapper around `xlsx` that uses stdin and outputs to stdout.

Note: Uses `concat-stream` so memory will build up here. No way around at the moment, excel parsing requires the entire buffer.
