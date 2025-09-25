import random
import string

def format_duration(seconds):
    """
    Convert duration in seconds to 'MM:SS' format.
    """
    minutes = seconds // 60
    sec = seconds % 60
    return f"{minutes}:{sec:02d}"

def generate_room_id():
    """
    Generate a unique room ID.
    """
    lenth = 6

    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=lenth))