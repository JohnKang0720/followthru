//
//  ProjectCardView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct ProjectCardView: View {
    
    var projectName: String = "Web Dev Server"
    
    var body: some View {
        VStack {
            HStack {
                Text("About \(projectName)")
                    .font(.title2)

                Spacer()
                
                Image(systemName: "circle")
                    .font(.title)
                    
            }
                .padding(.all, 12)
            
            HStack{
                Text("A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis.")
                    .padding(.horizontal, 12)
                    .padding(.bottom, 12)
            }
            HStack{
                DueDateView()
                    .padding(.bottom, 12)
                    .padding(.leading, 12)
                
                Spacer()
            }
            
        }
        .background(Color.secondary)
        .cornerRadius(10)
        .padding(.all, 12)
   }
}

struct ProjectCardView_Previews: PreviewProvider {
    static var previews: some View {
        ProjectCardView()
            .previewLayout(.sizeThatFits)
    }
}
