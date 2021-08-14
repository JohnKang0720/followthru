//
//  ProjectView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct ProjectView: View {
    
    var projectName: String
    
    var body: some View {
        ScrollView{
        VStack{
            ProjectCardView()
            BranchCardView()
        }
        }
        .navigationTitle("\(projectName)")
    }
}

struct ProjectView_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView{
            ProjectView(projectName: "Web Dev Server")
        }
    }
}
