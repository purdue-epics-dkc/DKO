# Import required modules
import json


# Function to open JSON file
def open_json(json_filename):
    with open(json_filename, 'r') as json_file:
        topic_tree = json.load(json_file)
    return topic_tree

# Function to build directory based on information we need
# Topic Tree
#       \
#      Topic {}
#           \
#         Subtopic {}
#               \
#               Concept {}
#                   \
#                   Sub-concept {}
#
def build_directory(topic_tree):

    # Dictionary that stores the topic as its keys
    directory = dict()

    # Iterate through every topic in the topic tree
    for topic in topic_tree['children']:

        # Mapping from topic -> subtopic
        topic_dict = dict()
        for subtopic in topic['children']:

            # Mapping from subtopic --> concept
            subtopic_dict = dict()
            for concept in subtopic['children']:

                # Mapping from concept --> sub concept
                concept_dict = dict()
                if 'children' in concept.keys():
                    for subconcept in concept['children']:

                        # Mapping from sub concept --> youtube_ID
                        subconcept_dict = dict()
                        if 'children' in subconcept.keys():
                            for component in subconcept['children']:
                                subconcept_dict[component['title']] = component['youtube_id']

                        # Store each sub concept dictionary for corresponding concept
                        concept_dict[subconcept['title']] = subconcept_dict

                # Store each concept dictionary for corresponding subtopic
                subtopic_dict[concept['title']] = concept_dict

            # Store each subtopic dictionary for corresponding topic
            topic_dict[subtopic['title']] = subtopic_dict

        directory[topic['title']] = topic_dict

    # Return the youtube-id directory to function calling it
    return directory


def write_json(json_filename, directory):
    with open(json_filename, 'w+') as outfile:
        json.dump(directory, outfile)





# Main function
if __name__ == '__main__':

    # Get topic tree from KHAN ACADEMY JSON
    KHAN_json_filename = 'topictree.json'
    topic_tree = open_json(KHAN_json_filename)

    # Build the directory structure with topic - subtopics - concepts - subconcepts
    directory = build_directory(topic_tree)

    # Write to new json file
    DKO_json_filename = 'directory_tree.json'
    write_json(DKO_json_filename, directory)



