# Use latest python
FROM python:3.11

# Ensures python output is unbuffered when written out
ENV PYTHONUNBUFFERED 1

# System dependencies
RUN apt-get update && apt-get install -y netcat-traditional

# Create bstream user
RUN addgroup --system bstream && adduser --system --group --home /home/bstream bstream
ENV PATH="${PATH}:/home/bstream/.local/bin"

# Create backend directory
RUN mkdir /backend
RUN mkdir /backend/staticfiles

# Set backend directory to working directory
WORKDIR /backend

# Copy project files to /backend
COPY . /backend/
RUN chmod +x /backend/entrypoint.sh
RUN chown -R bstream:bstream /backend/

# Change to bstream user
USER bstream

# Install requirements
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

ENTRYPOINT ["/backend/entrypoint.sh"]