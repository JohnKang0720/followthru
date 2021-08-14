//
//  BranchCardView.swift
//  ULHacksApp
//
//  Created by JJ Doleweerd on 2021-08-14.
//

import SwiftUI

struct BranchCardView: View {
    
    var branchName: String = "MongoDB Database"
    
    var body: some View {
        VStack {
            HStack {
                Text("About \(branchName)")
                    .font(.title2)

                Spacer()
                
                Image(systemName: "circle")
                    .font(.title)
                    
            }
                .padding(.all, 12)
            
            HStack{
                Text("A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.")
                    .padding(.horizontal, 12)
                    .padding(.bottom, 12)
                Image(systemName: "chevron.right")
                    .font(.title)
                    .padding(.trailing, 12)
                    .foregroundColor(.blue)
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

struct AboutBranchCardView: View {
    
    var branchName: String = "MongoDB Database"
    
    var body: some View {
        VStack {
            HStack {
                Text("About \(branchName)")
                    .font(.title2)

                Spacer()
                
                Image(systemName: "circle")
                    .font(.title)
                    
            }
                .padding(.all, 12)
            
            HStack{
                Text("A small description about the project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget condimentum felis, vitae blandit quam.")
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
    
struct BranchCardView_Previews: PreviewProvider {
    static var previews: some View {
        BranchCardView()
    }
}
