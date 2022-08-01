# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The code represents an index method being created under a BlogPosts controller, within an app. The index method is for retrieving all the content of a database table that corresponds to BlogPosts. This sets up a method for the user to see all blog posts. 
class BlogPostsController < ApplicationController
  def index
    # ---2) The code is creating an instance variable for the .all command. This allows the user to see all blog posts.
    @posts = BlogPost.all
  end

  # ---3) The code is creating a method called show, that creates an instance variable equivalent to executing the .find command on a specific instance of BlogPost. This displays a specific blog post to the user. 
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Creates a method called new, that creates an instance variable equivalent to executing the .new command on BlogPost, in order to return a new BlogPost. This creates an instance of BlogPost, without it being saved to the database. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Creates a instance variable equivalent to executing the .create command on BlogPost, with specified and required parameters. If the post is created successfully, the app navigates to the created post. If unsuccessful, the app navigates to a page for a new blog post. Also creates a method, named edit. This allows a user to create a blog post. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) Instance variable equivalent to executing the .find command on BlogPost, with specified and required parameters. This provides a way to run the edit method on a specific BlogPost. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Runs .update command on a specific instance of BlogPost. If the update is successful, the user is navigated to the updated post. If not, the user is navigated to the page for editing the post. Creates a method called destroy the runs .destroy command on a specific instance of BlogPost. The user is navigated a page of all the blog posts, if the destroy command is successful. This allows the user to update or delete a specific post. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This codes navigates the user to a specific blog post. It provides a place for the user to be naviagated after a command is run.  
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) keyword that prevents the data following from being called, except in the context of the calling object. This keeps following method from being accessed. 
  private
  def blog_post_params
    # ---10) Uses the require and permit methods on parameters. This requires a blog post to only allow title and content. This keeps users from adding unneccessary information into the database. 
    params.require(:blog_post).permit(:title, :content)
  end
end
